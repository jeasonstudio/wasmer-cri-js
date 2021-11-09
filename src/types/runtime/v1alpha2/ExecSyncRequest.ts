// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Long } from '@grpc/proto-loader';

export interface ExecSyncRequest {
  'containerId'?: (string);
  'cmd'?: (string)[];
  'timeout'?: (number | string | Long);
}

export interface ExecSyncRequest__Output {
  'containerId'?: (string);
  'cmd'?: (string)[];
  'timeout'?: (Long);
}
