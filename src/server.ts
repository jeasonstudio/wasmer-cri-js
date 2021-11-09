import * as path from 'path';
import * as protobufLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import { handler as ImageServiceHandlers } from './ImageService';
import type { ProtoGrpcType } from './types/api';

const lib = path.join(__dirname, '../protobuf');
const entry = 'kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto';

(async () => {
  const packageDefinition = await protobufLoader.load(entry, {
    includeDirs: [lib],
  });
  const packageObject = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType;

  const proto = packageObject.runtime.v1alpha2;

  // const channel = new grpc.Channel(
  //   'unix:///tmp/wasmer.sock',
  //   grpc.ChannelCredentials.createInsecure(),
  //   {
  //     // 'grpc.ssl_target_name_override'?: string;
  //     // 'grpc.primary_user_agent'?: string;
  //     // 'grpc.secondary_user_agent'?: string;
  //     // 'grpc.default_authority'?: string;
  //     // 'grpc.keepalive_time_ms'?: number;
  //     // 'grpc.keepalive_timeout_ms'?: number;
  //     // 'grpc.keepalive_permit_without_calls'?: number;
  //     // 'grpc.service_config'?: string;
  //     // 'grpc.max_concurrent_streams'?: number;
  //     // 'grpc.initial_reconnect_backoff_ms'?: number;
  //     // 'grpc.max_reconnect_backoff_ms'?: number;
  //     // 'grpc.use_local_subchannel_pool'?: number;
  //     // 'grpc.max_send_message_length'?: number;
  //     // 'grpc.max_receive_message_length'?: number;
  //     // 'grpc.enable_http_proxy'?: number;
  //     // 'grpc.http_connect_target'?: string;
  //     // 'grpc.http_connect_creds'?: string;
  //     // 'grpc.enable_channelz'?: number;
  //     // 'grpc-node.max_session_memory'?: number;
  //   }
  // );

  // console.log(channel.getChannelzRef());

  const server = new grpc.Server();
  server.addService(proto.ImageService.service, ImageServiceHandlers as any);
  server.bindAsync(
    '/tmp/wasmer.sock',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) throw error;
      const channelz = server.getChannelzRef();

      const channelClient = new proto.ImageService(
        `localhost:${port}`,
        grpc.credentials.createInsecure()
      );
      console.log(channelClient);
      // channelClient.waitForReady(Date.now() + 999_999_999, (err) => {
      //   console.error(2, err);
      //   console.log(111);
      // });
      const ch = channelClient.getChannel();
      console.log(ch.getTarget());
      server.start();
      console.log('grps server started at unix:///tmp/wasmer.sock', port);
    }
  );
})();
