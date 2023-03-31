import { ethers, Contract, BigNumber, ContractTransaction } from 'ethers';

import { CollateralChangeResponseI } from 'types/types';

export function deposit(
  signer: ethers.providers.JsonRpcSigner,
  data: CollateralChangeResponseI
): Promise<ContractTransaction> {
  const contract = new Contract(data.proxyAddr, [data.abi], signer);
  return contract.deposit(
    data.perpId,
    BigNumber.from(data.amountHex),
    data.priceUpdate.updateData,
    data.priceUpdate.publishTimes,
    { gasLimit: 1_000_000, value: data.priceUpdate.updateFee }
  );
}
