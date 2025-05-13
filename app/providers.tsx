'use client';

import { useEffect, useState } from 'react'

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export function Providers({ children }: any) {

	return (
		<div>
			{children}
		</div>
	)
}