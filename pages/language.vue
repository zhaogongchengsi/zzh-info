<template>
	<div class="container mx-auto py-10">
		<div class="py-5">
			<ClientOnly fallback-tag="div" fallback="Loading comments...">
				<LanguageChart />
			</ClientOnly>
		</div>
		<p class="mt-10 text-xs">数据来源 <a class="text-green-500 "
				href="https://github.com/zhaogongchengsi">GitHub</a>,可能不够准确，仅供参考 例如 React 由于是使用的是jsx 在统计时一并计算在 jsx 和 tsx
			内</p>
	</div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss'>
.language-contaner {}
</style>