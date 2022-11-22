/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a managed cluster snapshot.
 *
 * @summary Deletes a managed cluster snapshot.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-09-02-preview/examples/ManagedClusterSnapshotsDelete.json
 */
async function deleteManagedClusterSnapshot() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "snapshot1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusterSnapshots.delete(
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

deleteManagedClusterSnapshot().catch(console.error);
