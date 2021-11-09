// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerFilter as _runtime_v1alpha2_ContainerFilter, ContainerFilter__Output as _runtime_v1alpha2_ContainerFilter__Output } from './ContainerFilter';

export interface ListContainersRequest {
  'filter'?: (_runtime_v1alpha2_ContainerFilter | null);
}

export interface ListContainersRequest__Output {
  'filter'?: (_runtime_v1alpha2_ContainerFilter__Output);
}
