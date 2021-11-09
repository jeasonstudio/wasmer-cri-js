// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { NamespaceMode as _runtime_v1alpha2_NamespaceMode } from './NamespaceMode';

export interface NamespaceOption {
  'network'?: (_runtime_v1alpha2_NamespaceMode | keyof typeof _runtime_v1alpha2_NamespaceMode);
  'pid'?: (_runtime_v1alpha2_NamespaceMode | keyof typeof _runtime_v1alpha2_NamespaceMode);
  'ipc'?: (_runtime_v1alpha2_NamespaceMode | keyof typeof _runtime_v1alpha2_NamespaceMode);
  'targetId'?: (string);
}

export interface NamespaceOption__Output {
  'network'?: (_runtime_v1alpha2_NamespaceMode);
  'pid'?: (_runtime_v1alpha2_NamespaceMode);
  'ipc'?: (_runtime_v1alpha2_NamespaceMode);
  'targetId'?: (string);
}
