
import { NextApiResponse, NextApiRequest } from 'next'
import { Galaxy } from '../../../typings'
import { galaxies } from '../../../data/galaxies'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Galaxy[]>
) {
  return res.status(200).json(galaxies)
}
