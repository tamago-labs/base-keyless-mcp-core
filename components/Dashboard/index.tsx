"use client";

import React, { useState, useContext, useEffect } from 'react';
import { Copy, ExternalLink, AlertCircle, Check, CheckCircle, XCircle, Power, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { useAccount, useDisconnect, useChainId } from 'wagmi'
import { DatabaseContext } from "../../contexts/database"


const Dashboard = ({ walletAddress }: any) => {

  const { getProfile }: any = useContext(DatabaseContext)

  const chainId = useChainId()
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()

  const [profile, setProfile] = useState<any>(null)
  const [showAccessKey, setShowAccessKey] = useState(false);
  const [copied, setCopied] = useState(false)

  const accessKey = "*******************************************************************";
  const network = "Base Mainnet";
  const balance = "0.58 ETH";

  useEffect(() => {
    isConnected && address && getProfile(address).then(setProfile)
  }, [isConnected, address])

  // Sample pending transactions
  const pendingTransactions = [
    {
      id: "tx1",
      type: "Transfer",
      amount: "0.1",
      token: "ETH",
      recipient: "0x9e37a12cdc2f9b95d9ae2c3a7e457ae3f0a10d32",
      timestamp: "2025-05-13T10:23:45",
      status: "Pending"
    },
    {
      id: "tx2",
      type: "Contract Interaction",
      amount: "0",
      token: "ETH",
      contract: "0x4a8bc8e14d6e07e82e1d9c040eda77930e3403fe",
      function: "mintNFT()",
      timestamp: "2025-05-13T10:15:22",
      status: "Pending"
    }
  ];

  const handleCopyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    setCopied(true)
  };

  const handleDisconnect = () => {
    disconnect()
  };

  const handleApproveTransaction = (txId: any) => {
    // Handle transaction approval through Coinbase Wallet
    console.log("Approving transaction", txId);
  };

  const handleRejectTransaction = (txId: any) => {
    // Handle transaction rejection
    console.log("Rejecting transaction", txId);
  };

  const shortenAddress = (address: any) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const configCode = `{
  "mcpServers": {
    "base-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "base-serverless-mcp",
        "--base_access_key=${showAccessKey ? accessKey : "YOUR_ACCESS_KEY"}", 
        "--base_network=mainnet"
      ],
      "disabled": false
    }
  }
}`;

  console.log("profile : ", profile)

  return (
    <div className="min-h-screen relative  text-white">

      {/*<header className="bg-blue-900/50 border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-4">Base MCP Dashboard</h1>
              <div className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                {network}
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              {isConnected ? (
                <button 
                  onClick={handleDisconnect}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg border border-red-500/30 transition flex items-center"
                >
                  <Power className="w-4 h-4 mr-2" />
                  Disconnect Wallet
                </button>
              ) : (
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </header>*/}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Connection Status */}
        <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
            <span className="text-lg font-medium mr-2">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
            <div className="flex items-center bg-blue-950 rounded-lg px-3 py-1 ml-2">
              <span className="font-mono text-blue-300 mr-2">{shortenAddress(walletAddress)}</span>
              <button
                onClick={() => handleCopyToClipboard(walletAddress)}
                className="text-blue-400 hover:text-blue-300"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
              {chainId === 8453 ? "Base Mainnet" : (chainId === 84532 ? "Base Sepolia Testnet" : "Unsupported")}
            </div>
          </div>
          <div className="flex items-center w-[200px]">
            {isConnected && (
              <button
                onClick={handleDisconnect}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg border border-red-500/30 transition flex items-center"
              >
                Disconnect Wallet
              </button>
            )}
          </div>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Access Key Card */}
          <div className="bg-blue-900/30 border border-blue-700/30 rounded-xl p-6 col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Access Key</h2>
              <button
                onClick={() => setShowAccessKey(!showAccessKey)}
                className="text-blue-400 hover:text-blue-300"
              >
                {showAccessKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-3 mb-4">
              <div className="font-mono text-sm text-blue-300 break-all">
                {showAccessKey ? accessKey : accessKey.substring(0, 10) + "..." + accessKey.substring(accessKey.length - 5)}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handleCopyToClipboard(accessKey)}
                className="flex-1 bg-blue-700/30 hover:bg-blue-700/40 border border-blue-700/50 rounded-lg py-2 text-sm flex items-center justify-center"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </button>
              {/*<button className="flex-1 bg-blue-700/30 hover:bg-blue-700/40 border border-blue-700/50 rounded-lg py-2 text-sm flex items-center justify-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate
              </button>*/}
            </div>

            <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-300 text-sm">
                  Only the valid owner will be able to see this access key.
                </p>
              </div>
            </div>
          </div>

          {/* Pending Transactions Card */}
          <div className="bg-blue-900/30 border border-blue-700/30 rounded-xl p-6 col-span-1 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Pending Transactions</h2>

            {pendingTransactions.length > 0 ? (
              <div className="space-y-4">
                {pendingTransactions.map(tx => (
                  <div key={tx.id} className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-white">{tx.type}</span>
                          <span className="ml-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                            {tx.status}
                          </span>
                        </div>
                        <div className="text-sm text-blue-300 mt-1">
                          {new Date(tx.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <div className="font-medium">
                        {tx.amount} {tx.token}
                      </div>
                    </div>

                    <div className="border-t border-blue-800/30 pt-3 mb-3">
                      {tx.type === "Transfer" ? (
                        <div className="flex items-center mb-1">
                          <span className="text-sm text-blue-400 mr-2">To:</span>
                          <span className="font-mono text-sm text-blue-100">
                            {shortenAddress(tx.recipient)}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center mb-1">
                          <span className="text-sm text-blue-400 mr-2">Contract:</span>
                          <span className="font-mono text-sm text-blue-100">
                            {shortenAddress(tx.contract)}
                          </span>
                        </div>
                      )}

                      {tx.function && (
                        <div className="text-sm text-blue-300 mb-1">
                          Function: <span className="font-mono">{tx.function}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleApproveTransaction(tx.id)}
                        className="flex-1 bg-green-700/30 hover:bg-green-700/40 border border-green-700/50 rounded-lg py-2 text-sm text-green-300 flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve with Coinbase Wallet
                      </button>
                      <button
                        onClick={() => handleRejectTransaction(tx.id)}
                        className="flex-1 bg-red-700/30 hover:bg-red-700/40 border border-red-700/50 rounded-lg py-2 text-sm text-red-300 flex items-center justify-center"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-6 text-center">
                <p className="text-blue-300">No pending transactions</p>
                <p className="text-sm text-blue-400 mt-2">
                  Transactions initiated by AI will appear here for approval
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions Card */}
        {/*<div className="bg-blue-900/30 border border-blue-700/30 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Setup Instructions</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Configure Claude Desktop</h3>
                <p className="text-blue-100/80 mb-3">
                  Add your access key to the Claude Desktop configuration file:
                </p>
                <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4 mb-2">
                  <pre className="text-blue-300 font-mono text-sm overflow-auto whitespace-pre-wrap">
                    {configCode}
                  </pre>
                </div>
                <button 
                  onClick={() => handleCopyToClipboard(configCode)}
                  className="bg-blue-700/30 hover:bg-blue-700/40 border border-blue-700/50 rounded-lg py-1.5 px-3 text-sm flex items-center"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Config
                </button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Start Chatting with Claude</h3>
                <p className="text-blue-100/80 mb-3">
                  Once configured, you can ask Claude to interact with Base blockchain:
                </p>
                <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4">
                  <ul className="text-blue-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      "Check my ETH balance on Base"
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      "Send 0.1 ETH to 0x9e37..."
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      "Interact with [contract] on Base"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Approve Transactions</h3>
                <p className="text-blue-100/80">
                  When Claude initiates a transaction, you'll need to approve it with your Coinbase Wallet. Check this dashboard for pending transactions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <a href="/docs" className="text-blue-400 hover:text-blue-300 flex items-center">
              View detailed documentation
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>*/}
      </main>

    </div>
  );
};

export default Dashboard;