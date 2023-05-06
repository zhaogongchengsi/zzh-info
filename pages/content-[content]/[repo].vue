<template>
	<div class="container mx-auto">
		<p>{{ $route.params.content }} - {{ $route.params.repo }}</p>
	</div>
</template>
<script setup>
definePageMeta({
	layout: "content"
})

// const router = useRoute()

const files = await useFetch("/api/getfile", {
	params: {}
})


console.log(files)


</script>
<style lang=''></style>