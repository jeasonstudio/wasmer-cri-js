// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxConfig as _runtime_v1alpha2_PodSandboxConfig, PodSandboxConfig__Output as _runtime_v1alpha2_PodSandboxConfig__Output } from './PodSandboxConfig';

export interface RunPodSandboxRequest {
  'config'?: (_runtime_v1alpha2_PodSandboxConfig | null);
  'runtimeHandler'?: (string);
}

export interface RunPodSandboxRequest__Output {
  'config'?: (_runtime_v1alpha2_PodSandboxConfig__Output);
  'runtimeHandler'?: (string);
}
