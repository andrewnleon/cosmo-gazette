import { NextApiRequest, NextApiResponse } from 'next'
import { galaxies } from '../../../data/galaxies'
import { Galaxy, ResponseError } from '../../../typings'

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Galaxy | ResponseError>
) {
  const { query } = req
  const { slug } = query
  const filtered = galaxies.filter((galaxy) => galaxy.slug === slug)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `The galaxy '${slug}' has not been found.` })
}