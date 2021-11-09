// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerState as _runtime_v1alpha2_ContainerState } from './ContainerState';

export interface ContainerStateValue {
  'state'?: (_runtime_v1alpha2_ContainerState | keyof typeof _runtime_v1alpha2_ContainerState);
}

export interface ContainerStateValue__Output {
  'state'?: (_runtime_v1alpha2_ContainerState);
}
