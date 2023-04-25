import { $fetchGithub } from "../utils/fetchGithub";

/* 
  获取github所有的仓库
	created: 按照创建时间排序，最新的排在前面
	updated: 按照最后更新时间排序，最新的排在前面
	pushed: 按照最后推送时间排序，最新的排在前面
	full_name: 按照仓库名称排序
*/
export default defineEventHandler(async (event: any) => {

  const repose = await $fetchGithub<any[]>(
    `user/repos? ` + ["sort=updated", "direction=desc", "visibility=public"].join("&")
  );
  return repose?.filter((item: any) => {
    return !item.private || !item.fork;
  });
});
