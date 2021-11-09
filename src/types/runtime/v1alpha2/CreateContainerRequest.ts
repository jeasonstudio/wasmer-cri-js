// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerConfig as _runtime_v1alpha2_ContainerConfig, ContainerConfig__Output as _runtime_v1alpha2_ContainerConfig__Output } from './ContainerConfig';
import type { PodSandboxConfig as _runtime_v1alpha2_PodSandboxConfig, PodSandboxConfig__Output as _runtime_v1alpha2_PodSandboxConfig__Output } from './PodSandboxConfig';

export interface CreateContainerRequest {
  'podSandboxId'?: (string);
  'config'?: (_runtime_v1alpha2_ContainerConfig | null);
  'sandboxConfig'?: (_runtime_v1alpha2_PodSandboxConfig | null);
}

export interface CreateContainerRequest__Output {
  'podSandboxId'?: (string);
  'config'?: (_runtime_v1alpha2_ContainerConfig__Output);
  'sandboxConfig'?: (_runtime_v1alpha2_PodSandboxConfig__Output);
}
