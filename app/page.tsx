'use client';

import { AlchemyAccountProvider } from "@account-kit/react"; // ✅
import { config } from "@/config";
import "@account-kit/react/styles.css"; // 載入官方樣式

export default function Home() {
  return (
    <AlchemyAccountComponentsProvider config={config}>
      <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
        <AuthContent />
      </div>
    </AlchemyAccountComponentsProvider>
  );
}

function AuthContent() {
  const { user, isConnected } = useUser();

  if (!isConnected) {
    return (
      <div className="w-full max-w-[400px]">
        {/* 這就是你截圖 21 看到的官方精美登入框 */}
        <AuthCard />
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center text-white">
      <p>歡迎回來，{user?.email || "使用者"}！</p>
    </div>
  );
}