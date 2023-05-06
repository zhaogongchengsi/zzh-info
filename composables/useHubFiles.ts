export default async function (owner: string, repo: string, path = "") {
  const oc = useOctokit();

  console.log('123')

  const response = await oc.repos.getContent({
    owner,
    repo,
    path,
  });

  //   const files = response.data.filter((file) => file.type === "file");

  //   const subdirectories = response.data.filter((file) => file.type === "dir");

  //   for (const subdirectory of subdirectories) {
  //     const subdirectoryFiles = await getAllFiles(owner, repo, subdirectory.path);

  //     files.push(...subdirectoryFiles);
  //   }

  console.log(response);

  return [];
}
