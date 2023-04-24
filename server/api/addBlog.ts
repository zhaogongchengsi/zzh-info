// import { PrismaClient } from "@prisma/client";
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

  // const prisma = new PrismaClient();

  // await prisma.blog.create({
  //   data: {
  //     title: "第一篇blog",
  //     address: "blog",
  //   },
  // });

  // prisma.$disconnect();

  return useResponse(body, 0, "添加成功");
});
