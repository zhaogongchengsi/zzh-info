<template>
	<div class="w-full px-4 md:px-30 lg:px-60 my-5 md:my-20 flex flex-col-reverse md:flex-row md:justify-between items-center">

		<div>123</div>

		<div ref="avatarRef" class="avatar preserve-3d w-30 sm:w-40 md:w-60 rounded-50% overflow-hidden">
			<img class="w-full h-full" src="/avatar-1.jpg" alt="">
		</div>

	</div>
</template>
<script setup lang='ts'>
const avatarRef = ref(null)

onMounted(() => {
	if (process.client) {
		window.VanillaTilt.init(avatarRef.value);
	}
})
</script>
<style lang='scss'>
.avatar {
	transform-style: preserve-3d;
	transform: perspective(1000px);
	transform: translateZ(20px)
}
</style>