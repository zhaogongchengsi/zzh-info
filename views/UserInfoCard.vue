<template>
	<div
		class="w-full px-4 lg:px-60 my-5 md:my-20 flex flex-col-reverse md:flex-row md:justify-between items-center">

		<div class="flex flex-col w-full md:w-1/2 lg:w-2/3">
			<h2 class="text-center text-4xl md:text-6xl md:text-left my-5 text-green-700 font-extrabold">{{ subTitle }}</h2>
			<Describe />
		</div>

		<div ref="avatarRef" class="avatar flex-shrink-0 preserve-3d w-30 sm:w-40 md:w-60 rounded-50% overflow-hidden">
			<img class="w-full h-full" src="/avatar-1.jpg" alt="">
		</div>

	</div>
</template>
<script setup lang='ts'>
const avatarRef = ref(null)

const { subTitle } = useAppConfig() as any

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

.describe {
	p {
		margin: 10px 0;
	}

	a {
		color: aquamarine;
	}
}
</style>