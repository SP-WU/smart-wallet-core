import { createLightAccountClient } from "@account-kit/smart-contracts";
import { AlchemyWebSigner } from "@account-kit/signer";
import { sepolia } from "@account-kit/infra";

const API_KEY = "EmsWeL259mjlHNp0-SVu4";
const POLICY_ID = "85abf86d-eee9-4ff4-a1f8-20262e712f2e";

// 只有在瀏覽器環境才初始化，防止 SSR 報錯
export const getSigner = () => {
  if (typeof window === "undefined") return null;
  return new AlchemyWebSigner({
    client: { 
      connection: { apiKey: API_KEY },
      iframeConfig: {
        iframeContainerId: "alchemy-signer-iframe",
      },
    },
  });
};

export const getSmartAccountClient = async () => {
  const signer = getSigner();
  if (!signer) throw new Error("Signer 尚未準備就緒");

  return await createLightAccountClient({
    transport: { type: "alchemy", apiKey: API_KEY },
    chain: sepolia,
    signer,
    gasManagerConfig: {
      policyId: POLICY_ID,
    },
  });
};