import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(r => r.data)

export default function BillingPage() {
  const { data, error } = useSWR('/api/me/invoices', fetcher)

  if (error) return <div className="text-center text-red-600 py-10">Failed to load billing</div>
  if (!data) return <div className="text-center py-10">Loading…</div>

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Saved Payment Method</h2>
        <p className="mt-1 text-gray-700">{data.paymentMethod}</p>
        <h2 className="mt-4 text-xl font-semibold">GST Details</h2>
        <p className="mt-1 text-gray-700">{data.gstNumber}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium">Invoice ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Period</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.invoices.map(inv => (
              <tr key={inv.invoiceId} className="hover:bg-gray-50">
                <td className="px-4 py-2">{inv.invoiceId}</td>
                <td className="px-4 py-2">{inv.period}</td>
                <td className="px-4 py-2">₹{inv.amount}</td>
                <td className="px-4 py-2">{inv.status}</td>
                <td className="px-4 py-2">
                  <a href={inv.link} className="text-blue-500 hover:underline">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
