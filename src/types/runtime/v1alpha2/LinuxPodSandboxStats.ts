// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { CpuUsage as _runtime_v1alpha2_CpuUsage, CpuUsage__Output as _runtime_v1alpha2_CpuUsage__Output } from './CpuUsage';
import type { MemoryUsage as _runtime_v1alpha2_MemoryUsage, MemoryUsage__Output as _runtime_v1alpha2_MemoryUsage__Output } from './MemoryUsage';
import type { NetworkUsage as _runtime_v1alpha2_NetworkUsage, NetworkUsage__Output as _runtime_v1alpha2_NetworkUsage__Output } from './NetworkUsage';
import type { ProcessUsage as _runtime_v1alpha2_ProcessUsage, ProcessUsage__Output as _runtime_v1alpha2_ProcessUsage__Output } from './ProcessUsage';
import type { ContainerStats as _runtime_v1alpha2_ContainerStats, ContainerStats__Output as _runtime_v1alpha2_ContainerStats__Output } from './ContainerStats';

export interface LinuxPodSandboxStats {
  'cpu'?: (_runtime_v1alpha2_CpuUsage | null);
  'memory'?: (_runtime_v1alpha2_MemoryUsage | null);
  'network'?: (_runtime_v1alpha2_NetworkUsage | null);
  'process'?: (_runtime_v1alpha2_ProcessUsage | null);
  'containers'?: (_runtime_v1alpha2_ContainerStats)[];
}

export interface LinuxPodSandboxStats__Output {
  'cpu'?: (_runtime_v1alpha2_CpuUsage__Output);
  'memory'?: (_runtime_v1alpha2_MemoryUsage__Output);
  'network'?: (_runtime_v1alpha2_NetworkUsage__Output);
  'process'?: (_runtime_v1alpha2_ProcessUsage__Output);
  'containers'?: (_runtime_v1alpha2_ContainerStats__Output)[];
}
