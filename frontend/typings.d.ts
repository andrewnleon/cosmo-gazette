


type pageLayoutCtx = {
  children: prop;
};

type homeCtx = {
  page: prop;
  Component: JSX.Element;
  pageProps: props;
};

type pageCtx = {
  page: prop;
  Component: JSX.Element;
  pageProps: props;
};

type postCtx = {
  query: {
    slug: string;
  };
};

type reviewData = {
  data: SWRHook;
  error: string;
  id: string;
  attributes: any;
  results: PropsWithChildren;
  quote: string;
  author: string;
  company: string;
  jobtitle: string;
  alt: any;
  transition: number;
};


//API Data & Response Types
type ResponseError = {
  message: string
}
export type seo = {
  title: string;
  description: string;
};
export type Planet = {
  id: string;
  name: string;
  slug: string;
  diameter: string;
  mass: string;
  distance_from_earth: string;
  distance_from_sun: string;
  atmosphere: string;
  moons: string;
  rings: string;
  description: string;
  thumbnail: string;
};




export type Galaxy = {
  id: string;
  name: string;
  description: string;
  type: string;
  central_bar: string;
  central_bulge: string;
  prominent_halo: string;
  diameter: string;
  number_of_stars: string;
  distance_from_earth: string;
  number_of_spiral_arms: string;
  cause_of_ring_structure: string;
  cause_of_elongated_shape: string;
  cause_of_distinctive_shape: string;
  cause_of_distinctive_appearance: string;
  cause_of_high_rate_of_star_formation: string;
};
