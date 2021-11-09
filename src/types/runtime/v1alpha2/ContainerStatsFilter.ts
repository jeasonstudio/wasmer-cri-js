// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto


export interface ContainerStatsFilter {
  'id'?: (string);
  'podSandboxId'?: (string);
  'labelSelector'?: ({[key: string]: string});
}

export interface ContainerStatsFilter__Output {
  'id'?: (string);
  'podSandboxId'?: (string);
  'labelSelector'?: ({[key: string]: string});
}
