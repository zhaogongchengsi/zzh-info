export type Sort = "created" | "updated" | "pushed" | "full_name";

export type UseReposOptions = {
  sort?: Sort;

  // 每一页的页数
  pre_page?: number;
  // 页码
  page?: number;
};

export default async function (options: UseReposOptions = { pre_page: 5, page: 1 }) {
  return await useFetch("api/getAllRepos", { query: options });
}
