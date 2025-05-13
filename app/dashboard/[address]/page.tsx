import DashboardContainer from "@/components/Dashboard"

export default async function DashboardPage({ params }: any) {

    const { address } = await params

    return (
        <DashboardContainer walletAddress={address} />
    )
}
