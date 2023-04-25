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