/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      identity: {
        readOnly: true,
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Workspace: msRest.CompositeMapper = {
  serializedName: "Workspace",
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...Resource.type.modelProperties,
      workspaceId: {
        readOnly: true,
        serializedName: "properties.workspaceId",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      friendlyName: {
        serializedName: "properties.friendlyName",
        type: {
          name: "String"
        }
      },
      creationTime: {
        readOnly: true,
        serializedName: "properties.creationTime",
        type: {
          name: "DateTime"
        }
      },
      batchaiWorkspace: {
        serializedName: "properties.batchaiWorkspace",
        type: {
          name: "String"
        }
      },
      keyVault: {
        serializedName: "properties.keyVault",
        type: {
          name: "String"
        }
      },
      applicationInsights: {
        serializedName: "properties.applicationInsights",
        type: {
          name: "String"
        }
      },
      containerRegistry: {
        serializedName: "properties.containerRegistry",
        type: {
          name: "String"
        }
      },
      storageAccount: {
        serializedName: "properties.storageAccount",
        type: {
          name: "String"
        }
      },
      discoveryUrl: {
        serializedName: "properties.discoveryUrl",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceUpdateParameters: msRest.CompositeMapper = {
  serializedName: "WorkspaceUpdateParameters",
  type: {
    name: "Composite",
    className: "WorkspaceUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      friendlyName: {
        serializedName: "properties.friendlyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const Password: msRest.CompositeMapper = {
  serializedName: "Password",
  type: {
    name: "Composite",
    className: "Password",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegistryListCredentialsResult: msRest.CompositeMapper = {
  serializedName: "RegistryListCredentialsResult",
  type: {
    name: "Composite",
    className: "RegistryListCredentialsResult",
    modelProperties: {
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      username: {
        readOnly: true,
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      passwords: {
        serializedName: "passwords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Password"
            }
          }
        }
      }
    }
  }
};

export const ListWorkspaceKeysResult: msRest.CompositeMapper = {
  serializedName: "ListWorkspaceKeysResult",
  type: {
    name: "Composite",
    className: "ListWorkspaceKeysResult",
    modelProperties: {
      userStorageKey: {
        readOnly: true,
        serializedName: "userStorageKey",
        type: {
          name: "String"
        }
      },
      userStorageResourceId: {
        readOnly: true,
        serializedName: "userStorageResourceId",
        type: {
          name: "String"
        }
      },
      appInsightsInstrumentationKey: {
        readOnly: true,
        serializedName: "appInsightsInstrumentationKey",
        type: {
          name: "String"
        }
      },
      containerRegistryCredentials: {
        readOnly: true,
        serializedName: "containerRegistryCredentials",
        type: {
          name: "Composite",
          className: "RegistryListCredentialsResult"
        }
      }
    }
  }
};

export const ErrorDetail: msRest.CompositeMapper = {
  serializedName: "ErrorDetail",
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const MachineLearningServiceError: msRest.CompositeMapper = {
  serializedName: "MachineLearningServiceError",
  type: {
    name: "Composite",
    className: "MachineLearningServiceError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const Compute: msRest.CompositeMapper = {
  serializedName: "Compute",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "computeType",
      clientName: "computeType"
    },
    uberParent: "Compute",
    className: "Compute",
    modelProperties: {
      computeLocation: {
        serializedName: "computeLocation",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createdOn: {
        readOnly: true,
        serializedName: "createdOn",
        type: {
          name: "DateTime"
        }
      },
      modifiedOn: {
        readOnly: true,
        serializedName: "modifiedOn",
        type: {
          name: "DateTime"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      provisioningErrors: {
        readOnly: true,
        serializedName: "provisioningErrors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineLearningServiceError"
            }
          }
        }
      },
      computeType: {
        required: true,
        serializedName: "computeType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComputeResource: msRest.CompositeMapper = {
  serializedName: "ComputeResource",
  type: {
    name: "Composite",
    className: "ComputeResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          polymorphicDiscriminator: {
            serializedName: "computeType",
            clientName: "computeType"
          },
          uberParent: "Compute",
          className: "Compute"
        }
      }
    }
  }
};

export const SystemService: msRest.CompositeMapper = {
  serializedName: "SystemService",
  type: {
    name: "Composite",
    className: "SystemService",
    modelProperties: {
      systemServiceType: {
        readOnly: true,
        serializedName: "systemServiceType",
        type: {
          name: "String"
        }
      },
      publicIpAddress: {
        readOnly: true,
        serializedName: "publicIpAddress",
        type: {
          name: "String"
        }
      },
      version: {
        readOnly: true,
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SslConfiguration: msRest.CompositeMapper = {
  serializedName: "SslConfiguration",
  type: {
    name: "Composite",
    className: "SslConfiguration",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      cert: {
        serializedName: "cert",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      cname: {
        serializedName: "cname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AKSProperties: msRest.CompositeMapper = {
  serializedName: "AKS_properties",
  type: {
    name: "Composite",
    className: "AKSProperties",
    modelProperties: {
      clusterFqdn: {
        serializedName: "clusterFqdn",
        type: {
          name: "String"
        }
      },
      systemServices: {
        serializedName: "systemServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SystemService"
            }
          }
        }
      },
      agentCount: {
        serializedName: "agentCount",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      agentVMSize: {
        serializedName: "agentVMSize",
        type: {
          name: "String"
        }
      },
      sslConfiguration: {
        serializedName: "sslConfiguration",
        type: {
          name: "Composite",
          className: "SslConfiguration"
        }
      }
    }
  }
};

export const AKS: msRest.CompositeMapper = {
  serializedName: "AKS",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Compute.type.polymorphicDiscriminator,
    uberParent: "Compute",
    className: "AKS",
    modelProperties: {
      ...Compute.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AKSProperties"
        }
      }
    }
  }
};

export const ScaleSettings: msRest.CompositeMapper = {
  serializedName: "ScaleSettings",
  type: {
    name: "Composite",
    className: "ScaleSettings",
    modelProperties: {
      maxNodeCount: {
        serializedName: "maxNodeCount",
        type: {
          name: "Number"
        }
      },
      minNodeCount: {
        serializedName: "minNodeCount",
        type: {
          name: "Number"
        }
      },
      autoScaleEnabled: {
        serializedName: "autoScaleEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const BatchAIProperties: msRest.CompositeMapper = {
  serializedName: "BatchAI_properties",
  type: {
    name: "Composite",
    className: "BatchAIProperties",
    modelProperties: {
      vmSize: {
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      },
      vmPriority: {
        serializedName: "vmPriority",
        type: {
          name: "String"
        }
      },
      scaleSettings: {
        serializedName: "scaleSettings",
        type: {
          name: "Composite",
          className: "ScaleSettings"
        }
      }
    }
  }
};

export const BatchAI: msRest.CompositeMapper = {
  serializedName: "BatchAI",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Compute.type.polymorphicDiscriminator,
    uberParent: "Compute",
    className: "BatchAI",
    modelProperties: {
      ...Compute.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "BatchAIProperties"
        }
      }
    }
  }
};

export const VirtualMachineSshCredentials: msRest.CompositeMapper = {
  serializedName: "VirtualMachineSshCredentials",
  type: {
    name: "Composite",
    className: "VirtualMachineSshCredentials",
    modelProperties: {
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      publicKeyData: {
        serializedName: "publicKeyData",
        type: {
          name: "String"
        }
      },
      privateKeyData: {
        serializedName: "privateKeyData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineProperties: msRest.CompositeMapper = {
  serializedName: "VirtualMachine_properties",
  type: {
    name: "Composite",
    className: "VirtualMachineProperties",
    modelProperties: {
      virtualMachineSize: {
        serializedName: "virtualMachineSize",
        type: {
          name: "String"
        }
      },
      sshPort: {
        serializedName: "sshPort",
        type: {
          name: "Number"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      administratorAccount: {
        serializedName: "administratorAccount",
        type: {
          name: "Composite",
          className: "VirtualMachineSshCredentials"
        }
      }
    }
  }
};

export const VirtualMachine: msRest.CompositeMapper = {
  serializedName: "VirtualMachine",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Compute.type.polymorphicDiscriminator,
    uberParent: "Compute",
    className: "VirtualMachine",
    modelProperties: {
      ...Compute.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VirtualMachineProperties"
        }
      }
    }
  }
};

export const HDInsightProperties: msRest.CompositeMapper = {
  serializedName: "HDInsight_properties",
  type: {
    name: "Composite",
    className: "HDInsightProperties",
    modelProperties: {
      sshPort: {
        serializedName: "sshPort",
        type: {
          name: "Number"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      administratorAccount: {
        serializedName: "administratorAccount",
        type: {
          name: "Composite",
          className: "VirtualMachineSshCredentials"
        }
      }
    }
  }
};

export const HDInsight: msRest.CompositeMapper = {
  serializedName: "HDInsight",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Compute.type.polymorphicDiscriminator,
    uberParent: "Compute",
    className: "HDInsight",
    modelProperties: {
      ...Compute.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "HDInsightProperties"
        }
      }
    }
  }
};

export const DataFactory: msRest.CompositeMapper = {
  serializedName: "DataFactory",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Compute.type.polymorphicDiscriminator,
    uberParent: "Compute",
    className: "DataFactory",
    modelProperties: {
      ...Compute.type.modelProperties
    }
  }
};

export const ServicePrincipalCredentials: msRest.CompositeMapper = {
  serializedName: "ServicePrincipalCredentials",
  type: {
    name: "Composite",
    className: "ServicePrincipalCredentials",
    modelProperties: {
      clientId: {
        required: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      clientSecret: {
        required: true,
        serializedName: "clientSecret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComputeSecrets: msRest.CompositeMapper = {
  serializedName: "ComputeSecrets",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "computeType",
      clientName: "computeType"
    },
    uberParent: "ComputeSecrets",
    className: "ComputeSecrets",
    modelProperties: {
      computeType: {
        required: true,
        serializedName: "computeType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AksComputeSecrets: msRest.CompositeMapper = {
  serializedName: "AKS",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ComputeSecrets.type.polymorphicDiscriminator,
    uberParent: "ComputeSecrets",
    className: "AksComputeSecrets",
    modelProperties: {
      ...ComputeSecrets.type.modelProperties,
      userKubeConfig: {
        serializedName: "userKubeConfig",
        type: {
          name: "String"
        }
      },
      adminKubeConfig: {
        serializedName: "adminKubeConfig",
        type: {
          name: "String"
        }
      },
      imagePullSecretName: {
        serializedName: "imagePullSecretName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineSecrets: msRest.CompositeMapper = {
  serializedName: "VirtualMachine",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ComputeSecrets.type.polymorphicDiscriminator,
    uberParent: "ComputeSecrets",
    className: "VirtualMachineSecrets",
    modelProperties: {
      ...ComputeSecrets.type.modelProperties,
      administratorAccount: {
        serializedName: "administratorAccount",
        type: {
          name: "Composite",
          className: "VirtualMachineSshCredentials"
        }
      }
    }
  }
};

export const MachineLearningComputeCreateOrUpdateHeaders: msRest.CompositeMapper = {
  serializedName: "machinelearningcompute-createorupdate-headers",
  type: {
    name: "Composite",
    className: "MachineLearningComputeCreateOrUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineLearningComputeDeleteHeaders: msRest.CompositeMapper = {
  serializedName: "machinelearningcompute-delete-headers",
  type: {
    name: "Composite",
    className: "MachineLearningComputeDeleteHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineLearningComputeSystemUpdateHeaders: msRest.CompositeMapper = {
  serializedName: "machinelearningcompute-systemupdate-headers",
  type: {
    name: "Composite",
    className: "MachineLearningComputeSystemUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceListResult: msRest.CompositeMapper = {
  serializedName: "WorkspaceListResult",
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PaginatedComputeResourcesList: msRest.CompositeMapper = {
  serializedName: "PaginatedComputeResourcesList",
  type: {
    name: "Composite",
    className: "PaginatedComputeResourcesList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComputeResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'Compute' : Compute,
  'Compute.AKS' : AKS,
  'Compute.BatchAI' : BatchAI,
  'Compute.VirtualMachine' : VirtualMachine,
  'Compute.HDInsight' : HDInsight,
  'Compute.DataFactory' : DataFactory,
  'ComputeSecrets' : ComputeSecrets,
  'ComputeSecrets.AKS' : AksComputeSecrets,
  'ComputeSecrets.VirtualMachine' : VirtualMachineSecrets
};
