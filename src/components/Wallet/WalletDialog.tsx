import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

interface WalletDialogProps {
  isOpen: boolean;
  wallets: string[];
  onClose: () => void;
  activeWallet?: string;
  onActiveWalletChanged: (walletId: string) => void;
  onWalletsChanged: (wallets: string[]) => void;
}

const WalletDialog: React.FC<WalletDialogProps> = ({
  wallets,
  isOpen,
  onClose,
  activeWallet,
  onWalletsChanged,
  onActiveWalletChanged,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Check for MetaMask
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      setIsMetaMaskInstalled(true);
    } else {
      setIsMetaMaskInstalled(false);
    }
  }, []);

  // Connect to wallet
  const connectWallet = async () => {
    try {
      // Reset state on new connection attempt
      onWalletsChanged([]);
      setError("");

      // 1. Check if MetaMask (or any window.ethereum provider) is installed
      if (!isMetaMaskInstalled) {
        setError("MetaMask is not installed. Please install it to connect.");
        return;
      }

      // Initialize the provider
      const provider = new ethers.BrowserProvider((window as any).ethereum);

      // 2. Send the request to connect accounts
      const accs = await provider.send("eth_requestAccounts", []);

      // 3. Set accounts if the request is successful and returns accounts
      if (accs && accs.length > 0) {
        onWalletsChanged(accs);
        if (accs.find((a: string) => a === activeWallet)) {
          onActiveWalletChanged(activeWallet!);
        } else {
          onActiveWalletChanged(accs[0]);
        }
      } else {
        // Fallback in case request succeeds but returns no accounts
        setError("Could not retrieve accounts. Please try again.");
      }
    } catch (err: any) {
      // 4. Handle specific errors using a switch on the error code
      console.log(err.info.error.message);
      switch (err.info.error.code) {
        case 4001: // EIP-1193: User rejected the request
          setError("Connection request was rejected by the user.");
          break;
        case -32002: // EIP-1193: Request already pending
          setError(
            "Connection request already pending. Please check your MetaMask wallet."
          );
          break;
        default:
          // 5. Handle all other errors
          if (err) {
            setError(err.info.error.message);
          } else if (typeof err === "string") {
            setError(err);
          } else {
            setError("An unknown error occurred. Please try again.");
          }
          // Log the full error to the console for debugging
          console.error("connectWallet error:", err);
          break;
      }
    }
  };

  // Disconnect wallet
  const disconnectWallet = async () => {
    if (!isMetaMaskInstalled) return;

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);

      // **This is the key change:**
      // Send a request to MetaMask to revoke the 'eth_accounts' permission.
      // This will make MetaMask "forget" the site's connection.
      await provider.send("wallet_revokePermissions", [{ eth_accounts: {} }]);

      // After permissions are revoked, clear the state
      onWalletsChanged([]);
      onActiveWalletChanged("");
      setError("");
    } catch (err) {
      console.error("Failed to revoke permissions:", err);
      // Fallback: just clear state if revocation fails
      onWalletsChanged([]);
      setError(
        "Failed to disconnect properly. Please disconnect from the MetaMask extension."
      );
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (!isMetaMaskInstalled) return;

    const { ethereum } = window as any;
    const handleAccountsChanged = (newAccounts: string[]) => {
      onWalletsChanged(newAccounts);
      // If newAccounts is empty, it means user disconnected from MetaMask extension
      if (newAccounts.length === 0) {
        setError(""); // Clear errors on disconnect
      }
    };

    ethereum.on("accountsChanged", handleAccountsChanged);
    return () =>
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
  }, [isMetaMaskInstalled]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[580px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Wallet Connection
        </h2>

        {!isMetaMaskInstalled ? (
          <div className="text-red-600">
            <p>MetaMask is not installed.</p>
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Click here to install MetaMask
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {wallets.length > 0 ? (
              // --- CONNECTED STATE ---
              <div>
                <p className="text-gray-700 mb-2">
                  Connected Wallets ({wallets.length}):
                </p>
                <ul className="bg-gray-100 p-3 rounded-md space-y-2 max-h-40 overflow-y-auto mb-4">
                  {wallets.map((acc, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 font-mono text-sm break-all bg-gray-200 p-2 rounded cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="wallet"
                        value={acc}
                        checked={acc === activeWallet}
                        onChange={() => onActiveWalletChanged(acc)} // assumes you have setActiveWallet
                        className="accent-blue-500"
                      />
                      {acc}
                      <div className="flex-1" />
                      {acc === activeWallet && (
                        <span className="text-green-600">(Active)</span>
                      )}
                    </label>
                  ))}
                </ul>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={disconnectWallet}
                    className="bg-red-600 text-white  rounded hover:bg-red-700 p-2 rounded-lg"
                  >
                    Disconnect
                  </button>
                  <button
                    className="bg-emerald-500 p-2 rounded-lg"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              // --- DISCONNECTED STATE ---
              <div>
                <p className="text-gray-700 mb-3">No wallet connected yet.</p>
                <button
                  onClick={connectWallet}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        )}

        {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default WalletDialog;
