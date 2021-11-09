// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { LinuxContainerResources as _runtime_v1alpha2_LinuxContainerResources, LinuxContainerResources__Output as _runtime_v1alpha2_LinuxContainerResources__Output } from './LinuxContainerResources';
import type { WindowsContainerResources as _runtime_v1alpha2_WindowsContainerResources, WindowsContainerResources__Output as _runtime_v1alpha2_WindowsContainerResources__Output } from './WindowsContainerResources';

export interface UpdateContainerResourcesRequest {
  'containerId'?: (string);
  'linux'?: (_runtime_v1alpha2_LinuxContainerResources | null);
  'windows'?: (_runtime_v1alpha2_WindowsContainerResources | null);
  'annotations'?: ({[key: string]: string});
}

export interface UpdateContainerResourcesRequest__Output {
  'containerId'?: (string);
  'linux'?: (_runtime_v1alpha2_LinuxContainerResources__Output);
  'windows'?: (_runtime_v1alpha2_WindowsContainerResources__Output);
  'annotations'?: ({[key: string]: string});
}
