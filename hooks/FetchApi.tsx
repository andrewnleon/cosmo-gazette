import useSWR from "swr";

const FetchApi = (route: string, token: string) => {
  const { data, error } = useSWR(route, async () => {
    const response = await fetch(route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  });
  return { data, error };
};
export default FetchApi;
