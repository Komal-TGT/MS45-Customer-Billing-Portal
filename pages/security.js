import { useState } from 'react'
import axios from 'axios'

export default function Security() {
  const [apiKey, setApiKey] = useState('sk_live_xxxxxx')
  const regenerate = async () => {
    if (confirm('Regenerate API key?')) {
      const r = await axios.post('/api/me/regenerate-key')
      setApiKey(r.data.apiKey)
      alert('New key emailed!')
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Security</h1>
      <p>API Key: <span className="font-mono">{apiKey}</span></p>
      <button onClick={regenerate} className="bg-red-500 text-white px-4 py-2">
        Regenerate Key
      </button>
    </div>
  )
}
