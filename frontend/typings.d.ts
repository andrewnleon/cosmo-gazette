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