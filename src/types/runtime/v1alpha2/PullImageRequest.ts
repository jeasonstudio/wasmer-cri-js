// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';
import type { AuthConfig as _runtime_v1alpha2_AuthConfig, AuthConfig__Output as _runtime_v1alpha2_AuthConfig__Output } from './AuthConfig';
import type { PodSandboxConfig as _runtime_v1alpha2_PodSandboxConfig, PodSandboxConfig__Output as _runtime_v1alpha2_PodSandboxConfig__Output } from './PodSandboxConfig';

export interface PullImageRequest {
  'image'?: (_runtime_v1alpha2_ImageSpec | null);
  'auth'?: (_runtime_v1alpha2_AuthConfig | null);
  'sandboxConfig'?: (_runtime_v1alpha2_PodSandboxConfig | null);
}

export interface PullImageRequest__Output {
  'image'?: (_runtime_v1alpha2_ImageSpec__Output);
  'auth'?: (_runtime_v1alpha2_AuthConfig__Output);
  'sandboxConfig'?: (_runtime_v1alpha2_PodSandboxConfig__Output);
}
