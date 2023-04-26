// 获取用户基础信息
export default defineEventHandler(async () => {
  const oct = useOctokit();
  const { github } = useAppConfig() as any;
  
  const { data, status } = await oct.users.getByUsername({
    username: github.user,
  });

  if (status != 200) {
    return createError({
      message: "获取用户信息失败",
      statusCode: status,
    });
  }

  return data;
});
