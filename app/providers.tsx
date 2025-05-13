'use client';

import { useEffect, useState } from 'react'

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/amplify_outputs.json";
import { http, createConfig, WagmiProvider } from 'wagmi'
import { baseSepolia, base } from "wagmi/chains"
import { injected, metaMask } from 'wagmi/connectors'
import DatabaseProvider  from "../contexts/database"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

Amplify.configure(outputs);

const queryClient = new QueryClient()

export const config = createConfig({
	chains: [base, baseSepolia],
	connectors: [
		injected(), 
		metaMask(),
	],
	transports: {
		[base.id]: http(),
		[baseSepolia.id]: http(), 
	}
})

export function Providers({ children }: any) {

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
			<DatabaseProvider>
				{children}
				</DatabaseProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}