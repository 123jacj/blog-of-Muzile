import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// module
	// {
	// 	name: '漫游',
	// 	desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
	// 	// @keep-sorted { "keys": ["date"] }
	// 	entries: [
	// 		{
	// 			author: 'Design Scenes',
	// 			link: 'https://fenx.work/',
	// 			feed: 'https://fenx.work/rss/',
	// 			icon: 'https://fenx.work/favicon.ico',
	// 			avatar: 'https://fenx.work/favicon.ico',
	// 			archs: ['Ghost', 'Fly'],
	// 			date: '2026-03-13',
	// 			comment: '聚焦设计与技术交叉领域，旗下Design Fragments不错。',
	// 		},
	// 	],
	// },
	// #endregion
	// #region 优质博客
	{
		name: '优质',
		desc: '拥有各类优质内容的博客，分享给大家。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿本鹿',
				link: 'https://blog.zhilu.site/',
				feed: '',
				icon: 'https://www.zhilu.site/api/icon.png',
				avatar: 'https://weavatar.com/avatar/47c0f2e82b76d9b10eb3023df9e02e4e3fdbeaf5b74b842063f207971e7fbe7b?s=160',
				archs: ['Vercel', 'Nuxt'],
				date: '2026-04-03',
				comment: '本主题作者、前端开发者，喜欢分享技术与生活',
				desc: '纸鹿至麓不知路，支炉制露不止漉。',
			},
		],
	},

	// #region 待写
	// #endregion

	// #endregion

	// #endregion

	// #endregion

	// #endregion
] satisfies FeedGroup[]
