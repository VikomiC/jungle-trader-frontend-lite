import { type APIReferralCodeSelectionPayload, ReferralCodeSigner } from '@d8x/perpetuals-sdk';
import { Signer } from '@ethersproject/abstract-signer';

import { getRequestOptions } from 'helpers/getRequestOptions';

import {
  type EarnedRebateI,
  type OpenTraderRebateI,
  type ReferralCodeI,
  type ReferralVolumeI,
  type ValidatedResponseI,
} from '../types/types';
import { RebateTypeE, RequestMethodE } from '../types/enums';

import { config } from 'config';

const RPC = 'https://matic-mumbai.chainstacklabs.com';

function getReferralUrlByChainId(chainId: number) {
  return config.referralUrl[`${chainId}`] || config.referralUrl.default;
}

export async function postUseReferralCode(chainId: number, address: string, code: string, signer: Signer) {
  const referralCodeSigner = new ReferralCodeSigner(signer, RPC);

  const payload: APIReferralCodeSelectionPayload = {
    code,
    traderAddr: address,
    createdOn: Date.now(),
    signature: '',
  };

  payload.signature = await referralCodeSigner.getSignatureForCodeSelection(payload);

  if (!(await ReferralCodeSigner.checkCodeSelectionSignature(payload))) {
    throw new Error('signature not valid');
  } else {
    return fetch(`${getReferralUrlByChainId(chainId)}/select-referral-code`, {
      ...getRequestOptions(RequestMethodE.Post),
      body: JSON.stringify(payload),
    }).then((data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }

      return data.json();
    });
  }
}

export function getReferralCodeExists(chainId: number, code: string): Promise<ValidatedResponseI<{ code: string }[]>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/code-info?code=${code}`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}

export function getIsAgency(chainId: number, address: string): Promise<ValidatedResponseI<{ isAgency: boolean }>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/is-agency?addr=${address}`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}

export function getReferralVolume(chainId: number, address: string): Promise<ValidatedResponseI<ReferralVolumeI[]>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/referral-volume?referrerAddr=${address}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function getEarnedRebate(
  chainId: number,
  address: string,
  rebateType: RebateTypeE
): Promise<ValidatedResponseI<EarnedRebateI[]>> {
  const params = new URLSearchParams();
  params.append(`${rebateType}Addr`, address);

  return fetch(`${getReferralUrlByChainId(chainId)}/earned-rebate?${params}`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}

export function getReferralCodes(chainId: number, address: string): Promise<ValidatedResponseI<ReferralCodeI>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/my-referral-codes?addr=${address}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function getOpenTraderRebate(
  chainId: number,
  traderAddr: string
): Promise<ValidatedResponseI<OpenTraderRebateI[]>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/open-trader-rebate?addr=${traderAddr}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function getReferralRebate(chainId: number, address: string): Promise<ValidatedResponseI<ReferralCodeI>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/referral-rebate?referrerAddr=${address}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function getAgencyRebate(chainId: number): Promise<ValidatedResponseI<ReferralCodeI>> {
  return fetch(`${getReferralUrlByChainId(chainId)}/agency-rebate`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}
