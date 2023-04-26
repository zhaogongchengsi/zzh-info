<template>
	<div class="container mx-auto clearfix">
		<UserInfoCard />
	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

// const { data } = await useAllRepos()

// const { data } = await useGithubUser()

// const { data } = await useLanguages()



</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>