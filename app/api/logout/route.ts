export default function POST(req: Request, res: Response) {
  // Simulate a login request to your backend
  // For this example, we'll just send a success response
  res.status(200).json({ message: 'Logged in successfully' });
}
