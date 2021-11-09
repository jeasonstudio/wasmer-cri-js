// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Capability as _runtime_v1alpha2_Capability, Capability__Output as _runtime_v1alpha2_Capability__Output } from './Capability';
import type { NamespaceOption as _runtime_v1alpha2_NamespaceOption, NamespaceOption__Output as _runtime_v1alpha2_NamespaceOption__Output } from './NamespaceOption';
import type { SELinuxOption as _runtime_v1alpha2_SELinuxOption, SELinuxOption__Output as _runtime_v1alpha2_SELinuxOption__Output } from './SELinuxOption';
import type { Int64Value as _runtime_v1alpha2_Int64Value, Int64Value__Output as _runtime_v1alpha2_Int64Value__Output } from './Int64Value';
import type { SecurityProfile as _runtime_v1alpha2_SecurityProfile, SecurityProfile__Output as _runtime_v1alpha2_SecurityProfile__Output } from './SecurityProfile';
import type { Long } from '@grpc/proto-loader';

export interface LinuxContainerSecurityContext {
  'capabilities'?: (_runtime_v1alpha2_Capability | null);
  'privileged'?: (boolean);
  'namespaceOptions'?: (_runtime_v1alpha2_NamespaceOption | null);
  'selinuxOptions'?: (_runtime_v1alpha2_SELinuxOption | null);
  'runAsUser'?: (_runtime_v1alpha2_Int64Value | null);
  'runAsUsername'?: (string);
  'readonlyRootfs'?: (boolean);
  'supplementalGroups'?: (number | string | Long)[];
  'apparmorProfile'?: (string);
  'seccompProfilePath'?: (string);
  'noNewPrivs'?: (boolean);
  'runAsGroup'?: (_runtime_v1alpha2_Int64Value | null);
  'maskedPaths'?: (string)[];
  'readonlyPaths'?: (string)[];
  'seccomp'?: (_runtime_v1alpha2_SecurityProfile | null);
  'apparmor'?: (_runtime_v1alpha2_SecurityProfile | null);
}

export interface LinuxContainerSecurityContext__Output {
  'capabilities'?: (_runtime_v1alpha2_Capability__Output);
  'privileged'?: (boolean);
  'namespaceOptions'?: (_runtime_v1alpha2_NamespaceOption__Output);
  'selinuxOptions'?: (_runtime_v1alpha2_SELinuxOption__Output);
  'runAsUser'?: (_runtime_v1alpha2_Int64Value__Output);
  'runAsUsername'?: (string);
  'readonlyRootfs'?: (boolean);
  'supplementalGroups'?: (Long)[];
  'apparmorProfile'?: (string);
  'seccompProfilePath'?: (string);
  'noNewPrivs'?: (boolean);
  'runAsGroup'?: (_runtime_v1alpha2_Int64Value__Output);
  'maskedPaths'?: (string)[];
  'readonlyPaths'?: (string)[];
  'seccomp'?: (_runtime_v1alpha2_SecurityProfile__Output);
  'apparmor'?: (_runtime_v1alpha2_SecurityProfile__Output);
}
