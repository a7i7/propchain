"use client";
import { createContext, JSX, useContext, useEffect, useState } from "react";
import WalletDialog from "./WalletDialog";

interface IWalletContext {
  wallets: string[];
  activeWallet?: string;

  showWalletManageDialog: () => Promise<void>;
}

const WalletContext = createContext<IWalletContext>({} as IWalletContext);

export const WalletProvider = ({ children }: { children: JSX.Element }) => {
  const [wallets, setWallets] = useState<string[]>([]);
  const [activeWallet, setActiveWallet] = useState<string | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

  // Load from localStorage when the component mounts
  useEffect(() => {
    const storedWallets = localStorage.getItem("wallets");
    if (storedWallets) {
      setWallets(JSON.parse(storedWallets));
    }
    const activeWallet = localStorage.getItem("activeWallet");
    if (activeWallet) {
      setActiveWallet(activeWallet);
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{
        wallets,
        showWalletManageDialog: async () => {
          setOpen(true);
        },
        activeWallet,
      }}
    >
      <>
        {children}
        <WalletDialog
          isOpen={open}
          wallets={wallets}
          onClose={() => setOpen(false)}
          onWalletsChanged={function (wallets: string[]): void {
            setWallets(wallets);
            localStorage.setItem("wallets", JSON.stringify(wallets));
          }}
          activeWallet={activeWallet}
          onActiveWalletChanged={function (walletId: string): void {
            setActiveWallet(walletId);
            localStorage.setItem("activeWallet", walletId);
          }}
        />
      </>
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
