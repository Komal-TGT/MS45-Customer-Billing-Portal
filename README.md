# MS45 – Customer Billing & Usage Portal (Self-Service)

A customer-facing portal that lets your users:

- View current usage and remaining balance
- Download invoices
- Top-up or upgrade plans
- Regenerate API keys
- Manage billing information & IP allowlist

This portal lives under your Admin Panel domain but is customer-facing.  
Built with *Next.js* (frontend) + *Node.js API (BFF)* and integrates with:

- *MS1* (Authentication via Azure AD B2C or magic link)
- *MS32* (Usage data + key regeneration)
- *MS10* (Invoices / Payments)
- *MS9* (Emails for magic links / notifications)

---

## 🚀 Features

| Page         | Description |
|--------------|-------------|
| *Dashboard* | Current month scans, remaining balance, spend at ₹5/scan, status (Active/Paused). |
| *Usage* | Daily chart (30 days), top API endpoints, last 100 events (from MS32). |
| *Billing* | Saved payment method, invoices list (from MS10), GST fields. |
| *Plan* | Shows current plan, Top-up / Upgrade button (creates checkout via MS10). |
| *Security* | Masked API key, regenerate key (calls MS32 + emails via MS9), IP allowlist. |
ms45-portal/
├─ pages/
│ ├─ index.js # Dashboard page
│ ├─ usage.js # Usage page (daily chart, top endpoints, last events)
│ ├─ billing.js # Billing page (saved payment method, invoices)
│ ├─ plan.js # Plan page (top-up / upgrade)
│ ├─ security.js # Security page (API key, IP allowlist)
│ └─ api/ # BFF endpoints: /me, /me/usage, /me/invoices, etc.
├─ components/
│ └─ Layout.js # Shared layout (header + nav)
├─ styles/
│ └─ globals.css # Tailwind CSS base styles
├─ package.json
└─ README.md


---

## 🛠 Installation

1. *Clone this repository*  
   ```bash
   git clone <your-repo-url> ms45-portal
   cd ms45-portal


Install dependencies

npm install


This installs:

Next.js

React / React DOM

SWR

Axios

Chart.js & React-ChartJS-2

Tailwind CSS (already configured)

Configure environment variables
Create a .env.local file for your API URLs, keys, etc. Example:

NEXT_PUBLIC_API_BASE=https://api.yourdomain.com


Run development server

npm run dev


Open http://localhost:3000
 in your browser.

Build for production

npm run build
npm start

📡 API (BFF) Endpoints
Endpoint	Method	Description
/api/me	GET	Profile + subscription status
/api/me/usage	GET	Aggregated usage (MS32)
/api/me/invoices	GET	Invoices (MS10)
/api/me/topup	POST	Creates payment intent (MS10)
/api/me/regenerate-key	POST	Regenerates API key (MS32)
/api/me/ip-allowlist	POST	Save IP allowlist to MS32/MS13
🖥 Frontend Pages

pages/index.js – Dashboard

pages/usage.js – Usage chart, top endpoints, last 100 events

pages/billing.js – Billing & invoices

pages/plan.js – Current plan, top-up/upgrade

pages/security.js – API key regeneration, IP allowlist

Each page uses useSWR + axios to fetch from the above API endpoints.

🎨 Styling

Tailwind CSS for responsive design.

Cards use bg-white rounded-2xl shadow p-6 for a clean look.

Tables and charts styled consistently.

Easy to replace with your brand colors in tailwind.config.js.

✅ Acceptance Criteria

Customer can see usage/invoices and pay without contacting support.

Key regeneration works and is audited.

Plan upgrades reflect immediately (MS10 + MS32).

📜 License

MIT or your chosen license.

---

## 📂 Folder Structure
