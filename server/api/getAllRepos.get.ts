export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);

  const octokit = useOctokit();

  const { status, data } = await octokit.repos.listForAuthenticatedUser({
    type: "owner",
    sort: "pushed",
    page: query.page,
    per_page: query.pre_page,
  });

  if (status !== 200) {
    throw createError({
      statusCode: 400,
      statusMessage: `Failed to get warehouse`,
    });
  }

  return data;
});
