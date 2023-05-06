<template>
	<div class="container mx-auto clearfix">
		<div class="w-2/3 mx-auto ">

			<div class="first-screen py-10 md:py-15">

				<h2 class="text-5 md:text-8 my-3 md:my-6">
					Sure, here is a brief self-introduction in the style of Wu Liuqi for a front-end developer
				</h2>

				<p class="text-3 md:text-6">
					I'm a front-end developer who enjoys finding inspiration in code and strives for the beauty and
					perfection of
					technology. My coding style is concise and elegant, emphasizing code readability and maintainability.
					I'm
					skilled in communication and teamwork, believing that only with tight collaboration can we create
					outstanding
					work. I'm constantly learning and improving myself, always striving for the success of the team.
				</p>

				<span class="text-3 mt-5 block">Under construction</span>

			</div>

			<div>
				<ul class="flex flex-col gap-3 my-5">
					<li v-for="(item) in blogList" class="hover:shadow">
						<nuxt-link :to="'content-' + item.user + '/' + item.repo" class="p-3 border block rounded">
							<span>{{ item.title }}</span> <span>仓库名: {{ item.repo }}</span>
						</nuxt-link>
					</li>
				</ul>
			</div>

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
.first-screen {
	min-height: calc(100vh - var(--header-height, 60px));
}


.logo {
	background-color: #000;
	border-radius: 15px;
}

.content-info {
	margin-top: 30px;
}
</style>