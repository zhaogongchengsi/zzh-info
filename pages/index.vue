<template>
	<div class="container min-h-screen flex items-center mx-auto justify-center flex-col">

		<h1 class="text-7xl">还在开发中 (Under development ...)</h1>

	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

const getUserInfo = async () => {
	const { data } = await useFetch("api/getinfo")
	console.log(data)
}

const getAllRepos = async () => {
	const { data } = await useFetch("api/getAllRepos")
	console.log(data.value)
}

</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>