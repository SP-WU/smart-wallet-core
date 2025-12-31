import { config } from "@/config";
import { AlchemyAccountProvider } from "@account-kit/react";
import "@account-kit/react/styles.css"; // 這行絕對不能漏，否則會沒樣式

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <AlchemyAccountProvider config={config}>
          {children}
        </AlchemyAccountComponentsProvider>
      </body>
    </html>
  );
}