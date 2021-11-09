// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { HugepageLimit as _runtime_v1alpha2_HugepageLimit, HugepageLimit__Output as _runtime_v1alpha2_HugepageLimit__Output } from './HugepageLimit';
import type { Long } from '@grpc/proto-loader';

export interface LinuxContainerResources {
  'cpuPeriod'?: (number | string | Long);
  'cpuQuota'?: (number | string | Long);
  'cpuShares'?: (number | string | Long);
  'memoryLimitInBytes'?: (number | string | Long);
  'oomScoreAdj'?: (number | string | Long);
  'cpusetCpus'?: (string);
  'cpusetMems'?: (string);
  'hugepageLimits'?: (_runtime_v1alpha2_HugepageLimit)[];
  'unified'?: ({[key: string]: string});
  'memorySwapLimitInBytes'?: (number | string | Long);
}

export interface LinuxContainerResources__Output {
  'cpuPeriod'?: (Long);
  'cpuQuota'?: (Long);
  'cpuShares'?: (Long);
  'memoryLimitInBytes'?: (Long);
  'oomScoreAdj'?: (Long);
  'cpusetCpus'?: (string);
  'cpusetMems'?: (string);
  'hugepageLimits'?: (_runtime_v1alpha2_HugepageLimit__Output)[];
  'unified'?: ({[key: string]: string});
  'memorySwapLimitInBytes'?: (Long);
}
