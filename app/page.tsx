'use client';

import { useAuthCard, useUser, AlchemyAccountComponentsProvider } from "@account-kit/react";
import { config } from "@/config";
import "@account-kit/react/styles.css"; // 載入官方樣式

export default function Home() {
  return (
    // Provider 必須包裹在最外面才能使用官方組件
    <AlchemyAccountComponentsProvider config={config}>
      <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
        <AuthContent />
      </div>
    </AlchemyAccountComponentsProvider>
  );
}

function AuthContent() {
  const user = useUser();
  const { AuthCard } = useAuthCard();

  if (user) {
    return (
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center text-white">
        <h2 className="text-emerald-400 text-xl font-bold mb-4">登入成功！</h2>
        <p className="text-sm text-slate-400 mb-2">您的錢包地址：</p>
        <code className="block bg-black p-3 rounded text-xs break-all">{user.address}</code>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 w-full bg-slate-700 py-2 rounded-lg"
        >
          登出
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[400px]">
      {/* 這就是你截圖 21 看到的官方精美登入框 */}
      <AuthCard />
    </div>
  );
}