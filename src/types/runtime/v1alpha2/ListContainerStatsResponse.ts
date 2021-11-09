// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerStats as _runtime_v1alpha2_ContainerStats, ContainerStats__Output as _runtime_v1alpha2_ContainerStats__Output } from './ContainerStats';

export interface ListContainerStatsResponse {
  'stats'?: (_runtime_v1alpha2_ContainerStats)[];
}

export interface ListContainerStatsResponse__Output {
  'stats'?: (_runtime_v1alpha2_ContainerStats__Output)[];
}
