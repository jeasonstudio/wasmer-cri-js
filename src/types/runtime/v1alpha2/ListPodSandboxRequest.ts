// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxFilter as _runtime_v1alpha2_PodSandboxFilter, PodSandboxFilter__Output as _runtime_v1alpha2_PodSandboxFilter__Output } from './PodSandboxFilter';

export interface ListPodSandboxRequest {
  'filter'?: (_runtime_v1alpha2_PodSandboxFilter | null);
}

export interface ListPodSandboxRequest__Output {
  'filter'?: (_runtime_v1alpha2_PodSandboxFilter__Output);
}
