import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://lwh110221.github.io', 
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
						{ label: '大纲', slug: 'guides/dagan' },
					],
				},
				{
					label: '大纲提取',
					items: [
						{ label: '计算机组成原理', slug: '25dagang/大纲提取-计算机组成原理' },
						{ label: '数据结构', slug: '25dagang/大纲提取-数据结构' },
						{ label: '计算机网络', slug: '25dagang/大纲提取-计算机网络' },
						{ label: '操作系统', slug: '25dagang/大纲提取-操作系统' },
						{ label: '数据库系统', slug: '25dagang/大纲提取-数据库系统' },
						{ label: '通信原理（信号与系统）', slug: '25dagang/大纲提取-通信原理' },
						{ label: '通信网理论基础', slug: '25dagang/大纲提取-通信网基础' },
						{ label: '光纤通信', slug: '25dagang/大纲提取-光纤通信' },
						{ label: '数字化新技术理论', slug: '25dagang/大纲提取-数字化新技术' },
					],
				},
				{
					label: '计算机组成原理',
					items: [
						{ label: '知识点-整理版', slug: 'jizu/计组-整理' },
						{ label: '知识点-整理版2', slug: 'jizu/计组-整理2' },						
					],
				},
				{
					label: '数据库系统原理',
					items: [
						{ label: '数据库系统原理-1', slug: 'shujvku/数据库系统原理' },
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
						{ label: '刷题笔记-计组', slug: 'zaxiang/刷题笔记-计组' },
					],
				},
				{
					label: '其他',
					items: [
						{ label: '关于', slug: 'about' },
					],
				},
			],
		}),
	],
});
