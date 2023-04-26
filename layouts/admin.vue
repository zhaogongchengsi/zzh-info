<template>
	<section class="w-full">
		<div class="mx-auto container p-5 h-screen flex flex-col">
			<div class="flex-1">
				<slot></slot>
			</div>
			<div class="flex justify-between items-center">
				<ColorMode />
				<div></div>
			</div>
		</div>
	</section>
</template>
<script setup lang='ts'>

</script>
<style lang='scss'></style>