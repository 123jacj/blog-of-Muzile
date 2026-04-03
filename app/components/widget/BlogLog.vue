<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	// { label: '2020-08-24', value: '使用 zhilu.cyou 域名' },
	{ label: timeEstablished, value: '创建博客' },
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
