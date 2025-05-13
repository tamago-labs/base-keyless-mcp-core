"use client"

import React, { useState, useRef, useEffect } from 'react';
import { LogIn, Shield, Send, ArrowLeftRight, Search, Wallet, CreditCard  } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
    return <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                Securely interact with the Base blockchain ecosystem on an MCP-compatible AI client
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto ">
            {/* Left Column - Authentication Flow */}
            <div className="bg-blue-900/40 relative border border-blue-700/30 rounded-xl p-8">
                <div className="flex items-center mb-6">
                    <LogIn className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Setup Account</h3>
                </div>
                <p className="text-blue-100/80 mb-8">
                    Prepare your account for use with MCP-compatible clients like Claude Desktop
                </p>

                <div className="space-y-8 mb-8">
                    {/* Step 1 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Get Your Access Key</h3>
                            <p className="text-blue-100/80">
                                Connect with any Web3 wallet to receive your unique access key
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Configure in Claude Desktop</h3>
                            <p className="text-blue-100/80">
                                Add the access key to the config file to enable on-chain operations from your AI chat panel
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-950/60 mt-4 border border-blue-800/50 rounded-lg p-4">
                    <pre className="text-blue-300 font-mono text-xs overflow-auto">
                        {`{
  "mcpServers": {
    "base-keyless-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "base-keyless-mcp",
        "--base_access_key=YOUR_ACCESS_KEY", 
        "--base_network=mainnet"
      ],
      "disabled": false
    }
  }
}`}
                    </pre>
                </div>
                <div className="flex items-start mt-8">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            3
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Approve Only When Required</h3>
                            <p className="text-blue-100/80">
                                When a transaction requires approval, you will need to approve it on the dashboard
                            </p>
                        </div>
                    </div>

                
            </div>

            {/* Right Column - Wallet Integration */}
            {/*<div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8">
                <div className="flex items-center mb-6">
                    <Wallet className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Pair Wallet</h3>
                </div>
                <p className="text-blue-100/80 mb-8">
                    Pair with your wallet such as MetaMask or Coinbase Wallet. The system will notify you when approval is required
                </p>

                <div className="space-y-8 mb-8"> 
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            <Search className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Read Operations</h3>
                            <p className="text-blue-100/80">
                                Check balances, view transactions and explore blockchain data instantly within your AI chat panel
                            </p>
                        </div>
                    </div>
 
                    <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                            <Send className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Write Operations</h3>
                            <p className="text-blue-100/80">
                                For transactions like sending or swapping tokens, you'll need to approve each one on the dashboard
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-950/60 mt-4 border border-blue-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-2">
                                <CreditCard className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white">Coinbase Wallet</span>
                        </div>
                        <div className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full">
                            <span className="text-green-400 text-xs">Approval Required</span>
                        </div>
                    </div>
                    <div className="border-t border-blue-700/30 pt-3">
                        <p className="text-blue-200 text-sm">
                            When a transaction requires approval, you will be redirected to the dashboard to sign with your paired wallet
                        </p>
                    </div>
                </div>

                 
            </div>*/}
        </div>

        {/* How to use section */}
        <div className="mt-16">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Chat to Transact on Base</h3>
                <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
                    Once configured, you can initiate on-chain transactions on Base blockchain just by chatting
                </p>
            </div>

            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 shadow-xl max-w-2xl mx-auto">
                <div className="mb-4 flex items-center justify-between border-b border-blue-700/30 pb-4">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-blue-200 text-sm">Claude Desktop</div>
                    <div></div>
                </div>

                <div className="space-y-4 mb-6">
                    {/* Balance Check */}
                    <div className="bg-blue-950/50 rounded-lg p-4 text-blue-200">
                        <p className="text-sm">Help check my ETH balance on Base</p>
                    </div>

                    <div className="bg-blue-900/60 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <div className="w-6 h-6 rounded-full bg-purple-600 mr-2"></div>
                            <p className="text-white font-medium">Claude</p>
                        </div>
                        <p className="text-blue-100/90 text-sm">
                            I've checked your wallet on Base blockchain and your current ETH balance is 0.58 ETH.
                        </p>
                    </div>

                    {/* Transfer Request */}
                    <div className="bg-blue-950/50 rounded-lg p-4 text-blue-200">
                        <p className="text-sm">Help transfer 0.1 ETH to 0x9e37a12cdc2f9b95d9ae2c3a7e457ae3f0a10d32</p>
                    </div>

                    <div className="bg-blue-900/60 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <div className="w-6 h-6 rounded-full bg-purple-600 mr-2"></div>
                            <p className="text-white font-medium">Claude</p>
                        </div>
                        <p className="text-blue-100/90 text-sm mb-3">
                            I've prepared a transaction to transfer 0.1 ETH to address <span className="font-mono">0x9e37...d32</span>.
                        </p>
                        <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-3">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm text-blue-300">Amount:</p>
                                <p className="text-white font-medium">0.1 ETH</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-sm text-blue-300">Recipient:</p>
                                <p className="text-white font-mono text-sm">0x9e37a1...d32</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-blue-300">Status:</p>
                                <p className="text-yellow-400 font-medium">Waiting for approval</p>
                            </div>
                        </div>
                        <p className="text-blue-100/90 text-sm mt-3">
                            Please check your dashboard to approve this transaction.
                        </p>
                    </div>
                </div>

                <div className="border-t border-blue-700/30 pt-4">
                    <div className="bg-blue-800/50 rounded-full px-4 py-2 text-blue-200 text-sm flex items-center">
                        <span className="flex-grow">Send tokens, interact with DApps, check NFTs, and more...</span>
                        <Send className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HowItWorks