// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxMetadata as _runtime_v1alpha2_PodSandboxMetadata, PodSandboxMetadata__Output as _runtime_v1alpha2_PodSandboxMetadata__Output } from './PodSandboxMetadata';
import type { PodSandboxState as _runtime_v1alpha2_PodSandboxState } from './PodSandboxState';
import type { PodSandboxNetworkStatus as _runtime_v1alpha2_PodSandboxNetworkStatus, PodSandboxNetworkStatus__Output as _runtime_v1alpha2_PodSandboxNetworkStatus__Output } from './PodSandboxNetworkStatus';
import type { LinuxPodSandboxStatus as _runtime_v1alpha2_LinuxPodSandboxStatus, LinuxPodSandboxStatus__Output as _runtime_v1alpha2_LinuxPodSandboxStatus__Output } from './LinuxPodSandboxStatus';
import type { Long } from '@grpc/proto-loader';

export interface PodSandboxStatus {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata | null);
  'state'?: (_runtime_v1alpha2_PodSandboxState | keyof typeof _runtime_v1alpha2_PodSandboxState);
  'createdAt'?: (number | string | Long);
  'network'?: (_runtime_v1alpha2_PodSandboxNetworkStatus | null);
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxStatus | null);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'runtimeHandler'?: (string);
}

export interface PodSandboxStatus__Output {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata__Output);
  'state'?: (_runtime_v1alpha2_PodSandboxState);
  'createdAt'?: (Long);
  'network'?: (_runtime_v1alpha2_PodSandboxNetworkStatus__Output);
  'linux'?: (_runtime_v1alpha2_LinuxPodSandboxStatus__Output);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'runtimeHandler'?: (string);
}
