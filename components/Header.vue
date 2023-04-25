<template>
	<header class="header top-0 left-0 w-full fixed header-scrolled">

		<div class="container mx-auto h-full flex items-center justify-between p-4">
			<div class="flex items-center">
				<h1 class="flex items-center">
					<img class="w-10 h-10 block " src="/logo-96.png" :alt="title + 'logo'">
					<NuxtLink class="ml-3 text-lg md:text-2xl font-medium md:font-semibold" to="/">{{ title }}</NuxtLink>
				</h1>
			</div>

			<div :class="['w-8 h-8 cursor-pointer', $colorMode.value === 'dark' ? 'i-tabler-moon-stars' : 'i-tabler-sun-high']"
				@click="setDarkMode" />
		</div>
	</header>
</template>
<script setup lang='ts'>

const { title } = useAppConfig() as any

const theme = useColorMode()
const setDarkMode = () => {
	if (theme.preference === 'dark') {
		theme.preference = 'light'
	} else {
		theme.preference = 'dark'
	}
}
</script>
<style lang='scss'>
.header-scrolled {
	backdrop-filter: blur(10px);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.header {
	height: var(--header-height);
	z-index: 1000;
	transition: all 0.3s ease-in-out;
	background-color: var(--header-bg);
}
</style>