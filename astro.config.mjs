import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://lwh110221.github.io', 
  	integrations: [starlight()],
	integrations: [
		starlight({
			title: 'Ahao的知识库',
			locales: {
				root: {
				  label: '简体中文',
				  lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: 'Tips', slug: 'guides/example' },
					],
				},
				{
					label: '实验笔记',
					items: [
						{ label: 'Docker🐳容器入门', slug: 'notes/docker' },
					],
				},
				{
					label: '杂项',
					items: [
						{ label: 'Mac快捷键', slug: 'zaxiang/mactip' },
					],
				},
			],
		}),
	],
});
