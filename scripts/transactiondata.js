// const {Moralis} = require("moralis");
import { Moralis } from 'moralis' ;
import { EvmChain } from '@moralisweb3/evm-utils';
// const { EvmChain } = require("@moralisweb3/evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "EumiTJVWFTKNhGSrO704S868UXWm6EwbVxHZSDIGeprHUO1vSIhQJ8kb6SDlsUC3",
  });
  
  const address = "0xE1a5a8307489B0B4f52651feb3398277b000F395";

    const chain = EvmChain.MUMBAI;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
        address,
        chain,
    });
  
    return response;
}

const FetchedData = async () => {
 const data = await runApp();
 return data;
}

export default FetchedData;
