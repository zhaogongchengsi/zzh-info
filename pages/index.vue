<template>
	<div class="container min-h-screen mx-auto">
		<ul>
			<li v-for="i in 100">{{ i }}</li>
		</ul>
	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

const res = await useAllRepos()

const repos = computed(() => {
	return res.data.value
})

console.log(repos.value)

</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>