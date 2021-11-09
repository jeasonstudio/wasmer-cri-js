// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Namespace as _runtime_v1alpha2_Namespace, Namespace__Output as _runtime_v1alpha2_Namespace__Output } from './Namespace';

export interface LinuxPodSandboxStatus {
  'namespaces'?: (_runtime_v1alpha2_Namespace | null);
}

export interface LinuxPodSandboxStatus__Output {
  'namespaces'?: (_runtime_v1alpha2_Namespace__Output);
}
