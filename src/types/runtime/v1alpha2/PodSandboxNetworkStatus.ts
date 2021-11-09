// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodIP as _runtime_v1alpha2_PodIP, PodIP__Output as _runtime_v1alpha2_PodIP__Output } from './PodIP';

export interface PodSandboxNetworkStatus {
  'ip'?: (string);
  'additionalIps'?: (_runtime_v1alpha2_PodIP)[];
}

export interface PodSandboxNetworkStatus__Output {
  'ip'?: (string);
  'additionalIps'?: (_runtime_v1alpha2_PodIP__Output)[];
}
