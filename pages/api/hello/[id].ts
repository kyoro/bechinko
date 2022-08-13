// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UserData = {
  id: string
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData>
) {
  const result: UserData = { name: 'John Doe', id: req.query.id as string }
  res.status(200).json(result)
}
