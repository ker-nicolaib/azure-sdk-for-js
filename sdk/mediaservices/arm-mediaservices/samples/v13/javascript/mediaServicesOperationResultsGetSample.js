/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get media service operation result.
 *
 * @summary Get media service operation result.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/media-service-operation-result-by-id.json
 */
async function getStatusOfAsynchronousOperation() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "6FBA62C4-99B5-4FF8-9826-FC4744A8864F";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationResults.get(locationName, operationId);
  console.log(result);
}

getStatusOfAsynchronousOperation().catch(console.error);