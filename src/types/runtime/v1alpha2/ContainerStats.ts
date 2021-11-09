// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerAttributes as _runtime_v1alpha2_ContainerAttributes, ContainerAttributes__Output as _runtime_v1alpha2_ContainerAttributes__Output } from './ContainerAttributes';
import type { CpuUsage as _runtime_v1alpha2_CpuUsage, CpuUsage__Output as _runtime_v1alpha2_CpuUsage__Output } from './CpuUsage';
import type { MemoryUsage as _runtime_v1alpha2_MemoryUsage, MemoryUsage__Output as _runtime_v1alpha2_MemoryUsage__Output } from './MemoryUsage';
import type { FilesystemUsage as _runtime_v1alpha2_FilesystemUsage, FilesystemUsage__Output as _runtime_v1alpha2_FilesystemUsage__Output } from './FilesystemUsage';

export interface ContainerStats {
  'attributes'?: (_runtime_v1alpha2_ContainerAttributes | null);
  'cpu'?: (_runtime_v1alpha2_CpuUsage | null);
  'memory'?: (_runtime_v1alpha2_MemoryUsage | null);
  'writableLayer'?: (_runtime_v1alpha2_FilesystemUsage | null);
}

export interface ContainerStats__Output {
  'attributes'?: (_runtime_v1alpha2_ContainerAttributes__Output);
  'cpu'?: (_runtime_v1alpha2_CpuUsage__Output);
  'memory'?: (_runtime_v1alpha2_MemoryUsage__Output);
  'writableLayer'?: (_runtime_v1alpha2_FilesystemUsage__Output);
}
