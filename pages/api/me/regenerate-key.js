export default function handler(req, res) {
  const newKey = "sk_live_" + Math.random().toString(36).substring(2);
  // email it via MS9 here
  res.status(200).json({ apiKey: newKey });
}
