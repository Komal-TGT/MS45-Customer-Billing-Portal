import axios from 'axios'

export default function Plan() {
  const topUp = async () => {
    const r = await axios.post('/api/me/topup')
    window.location.href = r.data.checkoutUrl
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Plan</h1>
      <button onClick={topUp} className="bg-blue-500 text-white px-4 py-2">
        Top-up / Upgrade
      </button>
    </div>
  )
}
