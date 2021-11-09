// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerStatsFilter as _runtime_v1alpha2_ContainerStatsFilter, ContainerStatsFilter__Output as _runtime_v1alpha2_ContainerStatsFilter__Output } from './ContainerStatsFilter';

export interface ListContainerStatsRequest {
  'filter'?: (_runtime_v1alpha2_ContainerStatsFilter | null);
}

export interface ListContainerStatsRequest__Output {
  'filter'?: (_runtime_v1alpha2_ContainerStatsFilter__Output);
}
