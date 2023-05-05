<template>
	<div class="container mx-auto clearfix">
		<div class="w-2/3 mx-auto ">
			<ContentDoc class="content-info" path="/" />

			<nuxt-link to="language" class="gap-2 flex items-center">
				<div class="i-tabler-language-hiragana w-5 h-5" />
				<span class="text-4">language</span>
			</nuxt-link>

			<ul class="flex flex-col gap-3 my-5">
				<li v-for="(item) in blogList" class="hover:shadow">
					<nuxt-link :to="'content-' + item.user + '/' + item.repo" class="p-3 border block">
						<span>{{ item.title }}</span>
					</nuxt-link>
				</li>
			</ul>

		</div>
	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

// const { data } = await useAllRepos()
// const { data } = await useGithubUser()
const blogList = [
	{
		title: "第一篇",
		user: "zhaogongchengsi",
		repo: "zzh-blog"
	}
]

</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}

.content-info {
	margin-top: 30px;
}
</style>