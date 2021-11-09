// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { NamespaceOption as _runtime_v1alpha2_NamespaceOption, NamespaceOption__Output as _runtime_v1alpha2_NamespaceOption__Output } from './NamespaceOption';
import type { SELinuxOption as _runtime_v1alpha2_SELinuxOption, SELinuxOption__Output as _runtime_v1alpha2_SELinuxOption__Output } from './SELinuxOption';
import type { Int64Value as _runtime_v1alpha2_Int64Value, Int64Value__Output as _runtime_v1alpha2_Int64Value__Output } from './Int64Value';
import type { SecurityProfile as _runtime_v1alpha2_SecurityProfile, SecurityProfile__Output as _runtime_v1alpha2_SecurityProfile__Output } from './SecurityProfile';
import type { Long } from '@grpc/proto-loader';

export interface LinuxSandboxSecurityContext {
  'namespaceOptions'?: (_runtime_v1alpha2_NamespaceOption | null);
  'selinuxOptions'?: (_runtime_v1alpha2_SELinuxOption | null);
  'runAsUser'?: (_runtime_v1alpha2_Int64Value | null);
  'readonlyRootfs'?: (boolean);
  'supplementalGroups'?: (number | string | Long)[];
  'privileged'?: (boolean);
  'seccompProfilePath'?: (string);
  'runAsGroup'?: (_runtime_v1alpha2_Int64Value | null);
  'seccomp'?: (_runtime_v1alpha2_SecurityProfile | null);
  'apparmor'?: (_runtime_v1alpha2_SecurityProfile | null);
}

export interface LinuxSandboxSecurityContext__Output {
  'namespaceOptions'?: (_runtime_v1alpha2_NamespaceOption__Output);
  'selinuxOptions'?: (_runtime_v1alpha2_SELinuxOption__Output);
  'runAsUser'?: (_runtime_v1alpha2_Int64Value__Output);
  'readonlyRootfs'?: (boolean);
  'supplementalGroups'?: (Long)[];
  'privileged'?: (boolean);
  'seccompProfilePath'?: (string);
  'runAsGroup'?: (_runtime_v1alpha2_Int64Value__Output);
  'seccomp'?: (_runtime_v1alpha2_SecurityProfile__Output);
  'apparmor'?: (_runtime_v1alpha2_SecurityProfile__Output);
}
