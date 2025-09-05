export default function handler(req, res) {
  res.status(200).json([
    { invoiceId: "INV001", period: "Aug", amount: 250, status: "Paid", link: "/dummy.pdf" },
    { invoiceId: "INV002", period: "Sep", amount: 300, status: "Pending", link: "/dummy.pdf" }
  ]);
}
