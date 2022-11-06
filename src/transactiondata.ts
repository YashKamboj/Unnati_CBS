// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/evm-utils");

//  const RunApp = async () => {
//   await Moralis.start({
//     apiKey: "EumiTJVWFTKNhGSrO704S868UXWm6EwbVxHZSDIGeprHUO1vSIhQJ8kb6SDlsUC3",
//   });
  
//   const address = "0xE1a5a8307489B0B4f52651feb3398277b000F395";

//     const chain = EvmChain.MUMBAI;

//   const response = await Moralis.EvmApi.transaction.getWalletTransactions({
//         address,
//         chain
//     });
  
//   console.log(response.data);
//   return response.data;
// }

// RunApp();


import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

export const RunApp = async () => {
  await Moralis.start({
    apiKey: "EumiTJVWFTKNhGSrO704S868UXWm6EwbVxHZSDIGeprHUO1vSIhQJ8kb6SDlsUC3",
  });
  
  const address = "0xE1a5a8307489B0B4f52651feb3398277b000F395";

    const chain = EvmChain.MUMBAI;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });
  
  console.log(response);
}

// runApp();