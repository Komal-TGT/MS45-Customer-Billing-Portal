export default function handler(req, res) {
  res.status(200).json({
    email: "demo@example.com",
    subscription: {
      plan: "Prepaid",
      status: "Active",
      balance: 500,
      scansThisMonth: 50
    }
  });
}
