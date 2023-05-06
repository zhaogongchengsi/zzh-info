<template>
	<NuxtLoadingIndicator />
	<Header />
	<main class="w-full page-conatiner">
		<slot></slot>
	</main>
</template>
<script setup lang='ts'>

</script>
<style lang='scss'>
.page-conatiner {
	margin-top: var(--header-height, 60px);
}
</style>