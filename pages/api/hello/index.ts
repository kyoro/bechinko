// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UserData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData>
) {
  const result: UserData = { name: 'John Doe' }
  res.status(200).json(result)
}
