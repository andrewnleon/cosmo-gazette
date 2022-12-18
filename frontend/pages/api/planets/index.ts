
import { NextApiResponse, NextApiRequest } from 'next'
import { Planet } from '../../../typings'
import { planets } from "../../../data/planets";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Planet[]>
) {
  return res.status(200).json(planets)
}
