import { Octokit } from "@octokit/rest";
export default function () {
  const { github } = useRuntimeConfig();

  if (!github) {
    throw new Error(`Github is not configured`);
  }
  
  return new Octokit({
    auth: github.token,
  });
}
