import { createConfig, cookieStorage } from "@account-kit/react";
import { sepolia, alchemy } from "@account-kit/infra";

export const config = createConfig({
  // 直接使用環境變數或填入你的真實 Key
  transport: alchemy({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "EmsWeL259mjlHNp0-SVu4" }),
  chain: sepolia,
  ssr: true,
  storage: cookieStorage,
  // 注入 Gas Policy ID 實現免 Gas 功能
  policyId: "85abf86d-eee9-4ff4-a1f8-20262e712f2e",
});