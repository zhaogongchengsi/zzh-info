<template>
	<div class="container mx-auto clearfix">
		<div class="w-2/3 mx-auto ">
			<ContentDoc class="content-info" path="/" />
			
			<ul class="flex gap-3">
				<li>
					<a href="#" class="flex items-center gap-2">
						<div class="i-tabler-brand-github w-5 h-5" />
						<span class="text-4">github</span>
					</a>
				</li>
				<li>
					<nuxt-link to="language" class="gap-2 flex items-center">
						<div class="i-tabler-language-hiragana w-5 h-5" />
						<span class="text-4">language</span>
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
</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}

.content-info {
	margin-top: 30px;

	h1 {
		font-size: 30px;
	}

	p {
		font-size: 20px;
		margin: 20px 0;
	}
}
</style>