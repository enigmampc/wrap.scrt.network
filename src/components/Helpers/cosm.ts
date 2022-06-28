import { SigningStargateClient } from "@cosmjs/stargate";
import { Chain, Token } from "../../types";
import { gasToFee, sleep, SuggestedChains } from "../../commons";
import { notification } from "../../commons";

export async function setupCosmjs(
  setCosmjs: React.Dispatch<React.SetStateAction<SigningStargateClient | null>>,
  setAdressIBC: React.Dispatch<React.SetStateAction<string>>,
  targetChain: Chain | null,
  currentToken: Token
) {
  if (!window.keplr || !window.getOfflineSignerOnlyAmino) {
    notification("Error: Keplr not found.", "error");
    return;
  }

  try {
    if (["LUNC", "UST"].includes(currentToken.name.toUpperCase())) {
      await window.keplr.experimentalSuggestChain(SuggestedChains.TERRA);
    } else if (SuggestedChains.hasOwnProperty(currentToken.name)) {
      await window.keplr.experimentalSuggestChain(
        SuggestedChains[currentToken.name]
      );
    }
  } catch (err) {
    notification("Error adding new network to Keplr", "error");
  }

  // Initialize cosmjs on the target chain, because it has sendIbcTokens()

  try {
    await window.keplr.enable(targetChain!.chain_id);
  } catch (err) {
    notification(
      `Error no access to ${targetChain!.chain_id} Chain on Keplr.\n ${err}`,
      "error"
    );
  }
  const sourceOfflineSigner = window.getOfflineSignerOnlyAmino(
    targetChain!.chain_id
  );

  try {
    const depositFromAccounts = await sourceOfflineSigner.getAccounts();
    setAdressIBC(depositFromAccounts[0].address);
  } catch (err) {
    notification(
      `Error getting addresses for ${targetChain!.chain_id} Chain.\n ${err}`,
      "error"
    );
  }

  try {
    const cosmjs = await SigningStargateClient.connectWithSigner(
      targetChain!.rpc,
      sourceOfflineSigner,
      { prefix: targetChain!.bech32_prefix, broadcastPollIntervalMs: 10_000 }
    );
    setCosmjs(cosmjs);
  } catch (err) {
    notification(
      `Error creating signing wallet for ${
        targetChain!.chain_id
      } Chain.\n ${err}`,
      "error"
    );
  }
}
