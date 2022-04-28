import { RouteRecordRaw } from 'vue-router';

export const frameIn: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: '首页',
		},
		component: () => import('@/views/index.vue'),
	},
];

export default [...frameIn];
