// import { Octokit } from "octokit";
import useOctokit from "~/composables/useOctokit";

export default defineEventHandler(async () => {
  const { github } = useRuntimeConfig();

  //   const octokit = new Octokit({
  //     auth: github.token,
  //   });

  const octokit = useOctokit();

  const owner = "zhaogongchengsi";

  const repo = "zzh-blog";

  const path = "README.md";

  const response = await octokit.repos.getContent({
    owner: "zhaogongchengsi",
    repo: "zzh-blog",
    path: "",
  });

  //   if (files.status !== 200) {
  //     return [];
  //   }

  //   console.log(files.data);

  return response;
});
