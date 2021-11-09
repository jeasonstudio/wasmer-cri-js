// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxAttributes as _runtime_v1alpha2_PodSandboxAttributes, PodSandboxAttributes__Output as _runtime_v1alpha2_PodSandboxAttributes__Output } from './PodSandboxAttributes';
import type { LinuxPodSandboxStats as _runtime_v1alpha2_LinuxPodSandboxStats, LinuxPodSandboxStats__Output as _runtime_v1alpha2_LinuxPodSandboxStats__Output } from './LinuxPodSandboxStats';
import type { WindowsPodSandboxStats as _runtime_v1alpha2_WindowsPodSandboxStats, WindowsPodSandboxStats__Output as _runtime_v1alpha2_WindowsPodSandboxStats__Output } from './WindowsPodSandboxStats';

export interface PodSandboxStats {
  'attributes'?: (_runtime_v1alpha2_PodSandboxAttributes | null);
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxStats | null);
  'windows'?: (_runtime_v1alpha2_WindowsPodSandboxStats | null);
}

export interface PodSandboxStats__Output {
  'attributes'?: (_runtime_v1alpha2_PodSandboxAttributes__Output);
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxStats__Output);
  'windows'?: (_runtime_v1alpha2_WindowsPodSandboxStats__Output);
}
