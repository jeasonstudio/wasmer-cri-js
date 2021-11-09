// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto


// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

export enum _runtime_v1alpha2_SecurityProfile_ProfileType {
  RuntimeDefault = 0,
  Unconfined = 1,
  Localhost = 2,
}

export interface SecurityProfile {
  'profileType'?: (_runtime_v1alpha2_SecurityProfile_ProfileType | keyof typeof _runtime_v1alpha2_SecurityProfile_ProfileType);
  'localhostRef'?: (string);
}

export interface SecurityProfile__Output {
  'profileType'?: (_runtime_v1alpha2_SecurityProfile_ProfileType);
  'localhostRef'?: (string);
}
