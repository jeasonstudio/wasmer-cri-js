import * as path from 'path';
import * as protobufLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
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

  const client = new proto.ImageService(
    'localhost:61605',
    grpc.credentials.createInsecure()
  );

  client.ListImages(
    {
      filter: { image: { image: 'hello world', annotations: { foo: 'bar' } } },
    },
    function (err, response) {
      console.error('error:', err);
      console.log('response:', response?.images);
    }
  );
})();
