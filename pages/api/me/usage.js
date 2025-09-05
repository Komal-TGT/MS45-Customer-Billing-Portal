export default function handler(req, res) {
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    scans: Math.floor(Math.random() * 10)
  }));
  res.status(200).json({
    days,
    topEndpoints: ["/api/scan", "/api/verify"]
  });
}
