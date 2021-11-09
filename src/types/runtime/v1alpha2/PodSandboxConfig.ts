// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxMetadata as _runtime_v1alpha2_PodSandboxMetadata, PodSandboxMetadata__Output as _runtime_v1alpha2_PodSandboxMetadata__Output } from './PodSandboxMetadata';
import type { DNSConfig as _runtime_v1alpha2_DNSConfig, DNSConfig__Output as _runtime_v1alpha2_DNSConfig__Output } from './DNSConfig';
import type { PortMapping as _runtime_v1alpha2_PortMapping, PortMapping__Output as _runtime_v1alpha2_PortMapping__Output } from './PortMapping';
import type { LinuxPodSandboxConfig as _runtime_v1alpha2_LinuxPodSandboxConfig, LinuxPodSandboxConfig__Output as _runtime_v1alpha2_LinuxPodSandboxConfig__Output } from './LinuxPodSandboxConfig';
import type { WindowsPodSandboxConfig as _runtime_v1alpha2_WindowsPodSandboxConfig, WindowsPodSandboxConfig__Output as _runtime_v1alpha2_WindowsPodSandboxConfig__Output } from './WindowsPodSandboxConfig';

export interface PodSandboxConfig {
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata | null);
  'hostname'?: (string);
  'logDirectory'?: (string);
  'dnsConfig'?: (_runtime_v1alpha2_DNSConfig | null);
  'portMappings'?: (_runtime_v1alpha2_PortMapping)[];
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxConfig | null);
  'windows'?: (_runtime_v1alpha2_WindowsPodSandboxConfig | null);
}

export interface PodSandboxConfig__Output {
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata__Output);
  'hostname'?: (string);
  'logDirectory'?: (string);
  'dnsConfig'?: (_runtime_v1alpha2_DNSConfig__Output);
  'portMappings'?: (_runtime_v1alpha2_PortMapping__Output)[];
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxConfig__Output);
  'windows'?: (_runtime_v1alpha2_WindowsPodSandboxConfig__Output);
}
