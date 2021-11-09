// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerMetadata as _runtime_v1alpha2_ContainerMetadata, ContainerMetadata__Output as _runtime_v1alpha2_ContainerMetadata__Output } from './ContainerMetadata';
import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';
import type { ContainerState as _runtime_v1alpha2_ContainerState } from './ContainerState';
import type { Long } from '@grpc/proto-loader';

export interface Container {
  'id'?: (string);
  'podSandboxId'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata | null);
  'image'?: (_runtime_v1alpha2_ImageSpec | null);
  'imageRef'?: (string);
  'state'?: (_runtime_v1alpha2_ContainerState | keyof typeof _runtime_v1alpha2_ContainerState);
  'createdAt'?: (number | string | Long);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}

export interface Container__Output {
  'id'?: (string);
  'podSandboxId'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata__Output);
  'image'?: (_runtime_v1alpha2_ImageSpec__Output);
  'imageRef'?: (string);
  'state'?: (_runtime_v1alpha2_ContainerState);
  'createdAt'?: (Long);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
}
