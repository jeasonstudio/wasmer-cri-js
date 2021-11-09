// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxStatsFilter as _runtime_v1alpha2_PodSandboxStatsFilter, PodSandboxStatsFilter__Output as _runtime_v1alpha2_PodSandboxStatsFilter__Output } from './PodSandboxStatsFilter';

export interface ListPodSandboxStatsRequest {
  'filter'?: (_runtime_v1alpha2_PodSandboxStatsFilter | null);
}

export interface ListPodSandboxStatsRequest__Output {
  'filter'?: (_runtime_v1alpha2_PodSandboxStatsFilter__Output);
}
