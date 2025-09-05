export default function handler(req, res) {
  res.status(200).json({ checkoutUrl: "https://checkout.razorpay.com/v1/xyz" });
}
