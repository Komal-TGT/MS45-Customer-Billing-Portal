export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">MS45 Portal</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-blue-600">Dashboard</a>
            <a href="/usage" className="hover:text-blue-600">Usage</a>
            <a href="/billing" className="hover:text-blue-600">Billing</a>
            <a href="/plan" className="hover:text-blue-600">Plan</a>
            <a href="/security" className="hover:text-blue-600">Security</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
    </div>
  )
}
