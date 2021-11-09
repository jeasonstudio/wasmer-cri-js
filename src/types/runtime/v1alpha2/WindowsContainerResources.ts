// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Long } from '@grpc/proto-loader';

export interface WindowsContainerResources {
  'cpuShares'?: (number | string | Long);
  'cpuCount'?: (number | string | Long);
  'cpuMaximum'?: (number | string | Long);
  'memoryLimitInBytes'?: (number | string | Long);
}

export interface WindowsContainerResources__Output {
  'cpuShares'?: (Long);
  'cpuCount'?: (Long);
  'cpuMaximum'?: (Long);
  'memoryLimitInBytes'?: (Long);
}
