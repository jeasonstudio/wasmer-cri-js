// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxMetadata as _runtime_v1alpha2_PodSandboxMetadata, PodSandboxMetadata__Output as _runtime_v1alpha2_PodSandboxMetadata__Output } from './PodSandboxMetadata';
import type { PodSandboxState as _runtime_v1alpha2_PodSandboxState } from './PodSandboxState';
import type { Long } from '@grpc/proto-loader';

export interface PodSandbox {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata | null);
  'state'?: (_runtime_v1alpha2_PodSandboxState | keyof typeof _runtime_v1alpha2_PodSandboxState);
  'createdAt'?: (number | string | Long);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'runtimeHandler'?: (string);
}

export interface PodSandbox__Output {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata__Output);
  'state'?: (_runtime_v1alpha2_PodSandboxState);
  'createdAt'?: (Long);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'runtimeHandler'?: (string);
}
