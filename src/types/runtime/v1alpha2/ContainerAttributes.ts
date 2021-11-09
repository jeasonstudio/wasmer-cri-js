// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerMetadata as _runtime_v1alpha2_ContainerMetadata, ContainerMetadata__Output as _runtime_v1alpha2_ContainerMetadata__Output } from './ContainerMetadata';

export interface ContainerAttributes {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata | null);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}

export interface ContainerAttributes__Output {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata__Output);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}
