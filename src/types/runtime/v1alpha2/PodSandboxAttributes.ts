// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxMetadata as _runtime_v1alpha2_PodSandboxMetadata, PodSandboxMetadata__Output as _runtime_v1alpha2_PodSandboxMetadata__Output } from './PodSandboxMetadata';

export interface PodSandboxAttributes {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata | null);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}

export interface PodSandboxAttributes__Output {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_PodSandboxMetadata__Output);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}
