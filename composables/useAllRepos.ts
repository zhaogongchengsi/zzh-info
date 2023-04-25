
export default async function (sort: string = "created") {
  return await useFetch("api/getAllRepos", { query: { sort: sort } });
}

