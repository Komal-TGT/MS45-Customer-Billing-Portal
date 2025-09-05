import useSWR from 'swr'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const fetcher = url => axios.get(url).then(r => r.data)

export default function UsagePage() {
  const { data, error } = useSWR('/api/me/usage', fetcher)

  if (error) return <div className="text-center text-red-600 py-10">Failed to load usage</div>
  if (!data) return <div className="text-center py-10">Loading…</div>

  // Chart data
  const chartData = {
    labels: data.daily.map(item => item.date),
    datasets: [
      {
        label: 'Daily Scans',
        data: data.daily.map(item => item.count),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Daily Scans (Last 30 Days)',
      },
    },
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Usage</h1>
      <Line data={chartData} options={chartOptions} />

      <h2 className="mt-8 text-xl font-semibold">Top API Endpoints</h2>
      <ul className="list-disc ml-6 space-y-1 mt-2">
        {data.topEndpoints.map((endpoint, idx) => (
          <li key={idx} className="text-gray-700">{endpoint}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Last 100 Events</h2>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium">Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Event</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.lastEvents.map((ev, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2">{ev.timestamp}</td>
                <td className="px-4 py-2">{ev.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
