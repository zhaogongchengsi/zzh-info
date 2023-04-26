<template>
	<div class="container mx-auto clearfix">
		<UserInfoCard />
		<div class="w-full px-4 lg:px-60 my-5 md:my-20">
			<ClientOnly fallback-tag="div" fallback="Loading comments...">
				<LanguageChart />
			</ClientOnly>
			<p class="mt-10 text-xs">数据来源 <a class="text-green-500 "
					href="https://github.com/zhaogongchengsi">GitHub</a>,可能不够准确，仅供参考 例如 React 由于是使用的是jsx 在统计时一并计算在 jsx 和 tsx
				内</p>
		</div>
	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

// const { data } = await useAllRepos()
// const { data } = await useGithubUser()
</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>