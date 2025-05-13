
import { useState, useEffect } from "react"
import { X, Plug } from "lucide-react"
import { motion } from 'framer-motion';
import { Connector, useConnect } from 'wagmi'
import { useAccount } from 'wagmi'
import Link from "next/link"

const WalletOptions: any = () => {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}
      className="flex items-center w-full cursor-pointer justify-center bg-blue-700  border border-blue-700/50 rounded-lg py-3 px-4 text-white transition-all"
    >


      <span>Connect with {connector.name}</span>
    </button>
  ))
}

const ConnectWallet = () => {

  const { isConnected, address } = useAccount()

  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    isConnected && setModal(false)
  }, [isConnected])

  return <>

    {modal && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-blue-800 z-20  rounded-xl border text-white border-blue-700 p-6 max-w-lg w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Choose Wallet Type</h3>
            <button
              onClick={() => setModal(false)}
              className="text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 my-8">

            <WalletOptions />


            {/*<div className="pt-4 flex gap-3">
                <button
                  onClick={executeAddCollateral}
                  className="w-1/2 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  disabled={!additionalCollateral || parseFloat(additionalCollateral) <= 0}
                >
                  {loading
                    ?
                    <RefreshCw
                      className='mx-auto animate-spin'
                    />
                    :
                    <>
                      Add Collateral
                    </>
                  }
                </button>
                <button
                  onClick={() => setShowAddCollateralModal(false)}
                  className="w-1/2 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
              {errorMessage && (
                <p className="text-sm text-center mt-2 text-white">
                  {errorMessage}
                </p>
              )}*/}
          </div>
        </motion.div>
      </div>
    )}

    {!isConnected && (
      <div className=" flex items-center justify-end md:flex-1 lg:w-0">
        <button onClick={() => {
          setModal(true)
        }} className={`whitespace-nowrap px-5 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium cursor-pointer text-white bg-blue-600  hover:bg-blue-700`}>
          Connect Wallet
        </button>
      </div>
    )}

    {isConnected && (
      <div className=" flex items-center justify-end md:flex-1 lg:w-0">
        <Link href={`/dashboard/${address}`}>
          <button className={`whitespace-nowrap px-5 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium cursor-pointer text-white bg-blue-600  hover:bg-blue-700`}>
            Dashboard
          </button>
        </Link>

      </div>
    )}



  </>
}

export default ConnectWallet