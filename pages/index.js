import useSWR from 'swr'
import axios from 'axios'
const fetcher = url => axios.get(url).then(r => r.data)

export default function Dashboard() {
  const { data } = useSWR('/api/me', fetcher)
  if (!data) return <div className="text-center py-10">Loading…</div>

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Subscription</h2>
        <p><strong>Plan:</strong> {data.subscription.plan}</p>
        <p><strong>Status:</strong> {data.subscription.status}</p>
        <p><strong>Remaining Balance:</strong> ₹{data.subscription.balance}</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2">This Month</h2>
        <p><strong>Scans:</strong> {data.subscription.scansThisMonth}</p>
        <p><strong>Spend:</strong> ₹{data.subscription.scansThisMonth * 5}</p>
      </div>
    </div>
  )
}
