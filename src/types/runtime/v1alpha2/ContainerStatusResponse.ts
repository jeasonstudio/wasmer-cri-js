// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerStatus as _runtime_v1alpha2_ContainerStatus, ContainerStatus__Output as _runtime_v1alpha2_ContainerStatus__Output } from './ContainerStatus';

export interface ContainerStatusResponse {
  'status'?: (_runtime_v1alpha2_ContainerStatus | null);
  'info'?: ({[key: string]: string});
}

export interface ContainerStatusResponse__Output {
  'status'?: (_runtime_v1alpha2_ContainerStatus__Output);
  'info'?: ({[key: string]: string});
}
