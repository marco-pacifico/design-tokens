import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'tokens' } = req.query

  // Set the Access-Control-Allow-Origin header to allow all origins (required for Figma plugins)
  res.setHeader('Access-Control-Allow-Origin', '*');


  return res.json({
    message: `Hello ${name}!`,
  })
}