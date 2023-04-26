export default function () {
  const config = useAppConfig() as any;
  if (!config.github) {
    return createError({
      statusCode: 202,
      message: "获取github 配置信息失败，请在appconfig 内配置",
    });
  }
  return config.github as { user: string; link: string };
}
