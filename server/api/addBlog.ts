import { PrismaClient } from "@prisma/client";
import useResponse from "~/composables/useResponse";
// @ts-ignore
import md5 from "md5";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const { issueToken } = useRuntimeConfig();

  const hash = md5(body.password);
  if (hash != issueToken) {
    return useResponse(undefined, 0, "密码错误");
  }

  if (!!!body.title || !!!body.githubAddress) {
    return useResponse(undefined, 0, "缺少参数");
  }

  const prisma = new PrismaClient();

  try {

    await prisma.blog.create({
      data: {
        title: body.title,
        address: body.githubAddress,
      },
    });

    return useResponse(body, 0, "添加成功");

  } finally {
    prisma.$disconnect();
  }
});
