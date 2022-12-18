import { NextApiRequest, NextApiResponse } from "next";
import { planets } from "../../../data/planets";
import { Planet } from "../../../typings";

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Planet | ResponseError>
) {
  const { query } = req;
  const { slug } = query;
  const filtered = planets.filter((planet) => planet.slug === slug);

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `The planet '${slug}' has not been found.` })
}
