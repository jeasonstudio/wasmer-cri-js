import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ImageServiceClient as _runtime_v1alpha2_ImageServiceClient, ImageServiceDefinition as _runtime_v1alpha2_ImageServiceDefinition } from './runtime/v1alpha2/ImageService';
import type { RuntimeServiceClient as _runtime_v1alpha2_RuntimeServiceClient, RuntimeServiceDefinition as _runtime_v1alpha2_RuntimeServiceDefinition } from './runtime/v1alpha2/RuntimeService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  gogoproto: {
  }
  google: {
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
  runtime: {
    v1alpha2: {
      AttachRequest: MessageTypeDefinition
      AttachResponse: MessageTypeDefinition
      AuthConfig: MessageTypeDefinition
      Capability: MessageTypeDefinition
      Container: MessageTypeDefinition
      ContainerAttributes: MessageTypeDefinition
      ContainerConfig: MessageTypeDefinition
      ContainerFilter: MessageTypeDefinition
      ContainerMetadata: MessageTypeDefinition
      ContainerState: EnumTypeDefinition
      ContainerStateValue: MessageTypeDefinition
      ContainerStats: MessageTypeDefinition
      ContainerStatsFilter: MessageTypeDefinition
      ContainerStatsRequest: MessageTypeDefinition
      ContainerStatsResponse: MessageTypeDefinition
      ContainerStatus: MessageTypeDefinition
      ContainerStatusRequest: MessageTypeDefinition
      ContainerStatusResponse: MessageTypeDefinition
      CpuUsage: MessageTypeDefinition
      CreateContainerRequest: MessageTypeDefinition
      CreateContainerResponse: MessageTypeDefinition
      DNSConfig: MessageTypeDefinition
      Device: MessageTypeDefinition
      ExecRequest: MessageTypeDefinition
      ExecResponse: MessageTypeDefinition
      ExecSyncRequest: MessageTypeDefinition
      ExecSyncResponse: MessageTypeDefinition
      FilesystemIdentifier: MessageTypeDefinition
      FilesystemUsage: MessageTypeDefinition
      HugepageLimit: MessageTypeDefinition
      Image: MessageTypeDefinition
      ImageFilter: MessageTypeDefinition
      ImageFsInfoRequest: MessageTypeDefinition
      ImageFsInfoResponse: MessageTypeDefinition
      ImageService: SubtypeConstructor<typeof grpc.Client, _runtime_v1alpha2_ImageServiceClient> & { service: _runtime_v1alpha2_ImageServiceDefinition }
      ImageSpec: MessageTypeDefinition
      ImageStatusRequest: MessageTypeDefinition
      ImageStatusResponse: MessageTypeDefinition
      Int64Value: MessageTypeDefinition
      KeyValue: MessageTypeDefinition
      LinuxContainerConfig: MessageTypeDefinition
      LinuxContainerResources: MessageTypeDefinition
      LinuxContainerSecurityContext: MessageTypeDefinition
      LinuxPodSandboxConfig: MessageTypeDefinition
      LinuxPodSandboxStats: MessageTypeDefinition
      LinuxPodSandboxStatus: MessageTypeDefinition
      LinuxSandboxSecurityContext: MessageTypeDefinition
      ListContainerStatsRequest: MessageTypeDefinition
      ListContainerStatsResponse: MessageTypeDefinition
      ListContainersRequest: MessageTypeDefinition
      ListContainersResponse: MessageTypeDefinition
      ListImagesRequest: MessageTypeDefinition
      ListImagesResponse: MessageTypeDefinition
      ListPodSandboxRequest: MessageTypeDefinition
      ListPodSandboxResponse: MessageTypeDefinition
      ListPodSandboxStatsRequest: MessageTypeDefinition
      ListPodSandboxStatsResponse: MessageTypeDefinition
      MemoryUsage: MessageTypeDefinition
      Mount: MessageTypeDefinition
      MountPropagation: EnumTypeDefinition
      Namespace: MessageTypeDefinition
      NamespaceMode: EnumTypeDefinition
      NamespaceOption: MessageTypeDefinition
      NetworkConfig: MessageTypeDefinition
      NetworkInterfaceUsage: MessageTypeDefinition
      NetworkUsage: MessageTypeDefinition
      PodIP: MessageTypeDefinition
      PodSandbox: MessageTypeDefinition
      PodSandboxAttributes: MessageTypeDefinition
      PodSandboxConfig: MessageTypeDefinition
      PodSandboxFilter: MessageTypeDefinition
      PodSandboxMetadata: MessageTypeDefinition
      PodSandboxNetworkStatus: MessageTypeDefinition
      PodSandboxState: EnumTypeDefinition
      PodSandboxStateValue: MessageTypeDefinition
      PodSandboxStats: MessageTypeDefinition
      PodSandboxStatsFilter: MessageTypeDefinition
      PodSandboxStatsRequest: MessageTypeDefinition
      PodSandboxStatsResponse: MessageTypeDefinition
      PodSandboxStatus: MessageTypeDefinition
      PodSandboxStatusRequest: MessageTypeDefinition
      PodSandboxStatusResponse: MessageTypeDefinition
      PortForwardRequest: MessageTypeDefinition
      PortForwardResponse: MessageTypeDefinition
      PortMapping: MessageTypeDefinition
      ProcessUsage: MessageTypeDefinition
      Protocol: EnumTypeDefinition
      PullImageRequest: MessageTypeDefinition
      PullImageResponse: MessageTypeDefinition
      RemoveContainerRequest: MessageTypeDefinition
      RemoveContainerResponse: MessageTypeDefinition
      RemoveImageRequest: MessageTypeDefinition
      RemoveImageResponse: MessageTypeDefinition
      RemovePodSandboxRequest: MessageTypeDefinition
      RemovePodSandboxResponse: MessageTypeDefinition
      ReopenContainerLogRequest: MessageTypeDefinition
      ReopenContainerLogResponse: MessageTypeDefinition
      RunPodSandboxRequest: MessageTypeDefinition
      RunPodSandboxResponse: MessageTypeDefinition
      RuntimeCondition: MessageTypeDefinition
      RuntimeConfig: MessageTypeDefinition
      RuntimeService: SubtypeConstructor<typeof grpc.Client, _runtime_v1alpha2_RuntimeServiceClient> & { service: _runtime_v1alpha2_RuntimeServiceDefinition }
      RuntimeStatus: MessageTypeDefinition
      SELinuxOption: MessageTypeDefinition
      SecurityProfile: MessageTypeDefinition
      StartContainerRequest: MessageTypeDefinition
      StartContainerResponse: MessageTypeDefinition
      StatusRequest: MessageTypeDefinition
      StatusResponse: MessageTypeDefinition
      StopContainerRequest: MessageTypeDefinition
      StopContainerResponse: MessageTypeDefinition
      StopPodSandboxRequest: MessageTypeDefinition
      StopPodSandboxResponse: MessageTypeDefinition
      UInt64Value: MessageTypeDefinition
      UpdateContainerResourcesRequest: MessageTypeDefinition
      UpdateContainerResourcesResponse: MessageTypeDefinition
      UpdateRuntimeConfigRequest: MessageTypeDefinition
      UpdateRuntimeConfigResponse: MessageTypeDefinition
      VersionRequest: MessageTypeDefinition
      VersionResponse: MessageTypeDefinition
      WindowsContainerConfig: MessageTypeDefinition
      WindowsContainerResources: MessageTypeDefinition
      WindowsContainerSecurityContext: MessageTypeDefinition
      WindowsPodSandboxConfig: MessageTypeDefinition
      WindowsPodSandboxStats: MessageTypeDefinition
      WindowsSandboxSecurityContext: MessageTypeDefinition
    }
  }
}

