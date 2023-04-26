<template>
	<div class="w-full h-150 overflow-auto scrollbar-none">
		<div v-if="pending" class="w-full h-full flex justify-center items-center flex-col border rounded">

			<span>正在统计</span>

			<div class="i-tabler-loader rotate w-15 h-15 mt-10" />
		</div>
		<ol v-else class="flex flex-col gap-5 ">
			<li v-for="(item, index) in langChartData" :key="index" class="py-2">
				<div :class="['flex items-center mb-5', item.class]">
					<div :class="[item.icon, ' w-6 h-6 md:w-10 md:h-10 mr-5']" />
					<span class="text-base md:text-2xl">{{ item.name }}</span>
				</div>
				<div
					:class="['w-full bg-#ECF2FF border dark:bg-gray-200 h-4 md:h-6 p-1 box-border rounded shadow-inner hover:shadow-xl']">
					<div :style="{ width: roundedNum(item.value) }" :class="[item.color, 'h-full rounded']"></div>
				</div>
			</li>
		</ol>
	</div>
</template>
<script setup lang='ts'>
import languageConfig from '~/constants/language';
const { data, pending } = await useLanguages()
let maxValue = ref<number>(0)

const roundedNum = (value: number) => {
	const percentage = value / (maxValue.value + 500) * 100;
	return Math.ceil(percentage) + "%";
}

const langChartData = computed(() => {
	const chaartData: {
		name: string
		class: string,
		icon: string,
		value: number,
		color: string
	}[] = []

	const langs: { [key: string]: number } = unref(data.value) || {} as any

	for (const [key, value] of Object.entries(langs)) {
		if (maxValue.value < value) {
			maxValue.value = value
		}
		// @ts-ignore
		const conf = languageConfig[key] as {
			icon: string,
			class: string,
			color: string
		} | undefined

		if (conf) {
			chaartData.push({
				name: key,
				class: conf.class,
				icon: conf.icon,
				color: conf.color,
				value
			})
		} else {
			chaartData.push({
				name: key,
				class: "text-cyan",
				icon: "i-tabler-biohazard",
				color: "bg-indigo-600",
				value
			})
		}

	}

	return chaartData
})

</script>
<style lang='scss'></style>