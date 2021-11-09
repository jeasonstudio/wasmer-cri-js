// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerMetadata as _runtime_v1alpha2_ContainerMetadata, ContainerMetadata__Output as _runtime_v1alpha2_ContainerMetadata__Output } from './ContainerMetadata';
import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';
import type { KeyValue as _runtime_v1alpha2_KeyValue, KeyValue__Output as _runtime_v1alpha2_KeyValue__Output } from './KeyValue';
import type { Mount as _runtime_v1alpha2_Mount, Mount__Output as _runtime_v1alpha2_Mount__Output } from './Mount';
import type { Device as _runtime_v1alpha2_Device, Device__Output as _runtime_v1alpha2_Device__Output } from './Device';
import type { LinuxContainerConfig as _runtime_v1alpha2_LinuxContainerConfig, LinuxContainerConfig__Output as _runtime_v1alpha2_LinuxContainerConfig__Output } from './LinuxContainerConfig';
import type { WindowsContainerConfig as _runtime_v1alpha2_WindowsContainerConfig, WindowsContainerConfig__Output as _runtime_v1alpha2_WindowsContainerConfig__Output } from './WindowsContainerConfig';

export interface ContainerConfig {
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata | null);
  'image'?: (_runtime_v1alpha2_ImageSpec | null);
  'command'?: (string)[];
  'args'?: (string)[];
  'workingDir'?: (string);
  'envs'?: (_runtime_v1alpha2_KeyValue)[];
  'mounts'?: (_runtime_v1alpha2_Mount)[];
  'devices'?: (_runtime_v1alpha2_Device)[];
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'logPath'?: (string);
  'stdin'?: (boolean);
  'stdinOnce'?: (boolean);
  'tty'?: (boolean);
  'linux'?: (_runtime_v1alpha2_LinuxContainerConfig | null);
  'windows'?: (_runtime_v1alpha2_WindowsContainerConfig | null);
}

export interface ContainerConfig__Output {
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata__Output);
  'image'?: (_runtime_v1alpha2_ImageSpec__Output);
  'command'?: (string)[];
  'args'?: (string)[];
  'workingDir'?: (string);
  'envs'?: (_runtime_v1alpha2_KeyValue__Output)[];
  'mounts'?: (_runtime_v1alpha2_Mount__Output)[];
  'devices'?: (_runtime_v1alpha2_Device__Output)[];
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'logPath'?: (string);
  'stdin'?: (boolean);
  'stdinOnce'?: (boolean);
  'tty'?: (boolean);
  'linux'?: (_runtime_v1alpha2_LinuxContainerConfig__Output);
  'windows'?: (_runtime_v1alpha2_WindowsContainerConfig__Output);
}
