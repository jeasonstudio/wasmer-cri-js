// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Long } from '@grpc/proto-loader';

export interface StopContainerRequest {
  'containerId'?: (string);
  'timeout'?: (number | string | Long);
}

export interface StopContainerRequest__Output {
  'containerId'?: (string);
  'timeout'?: (Long);
}
