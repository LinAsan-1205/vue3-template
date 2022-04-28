import NProgress from 'nprogress';
import router from '@/router';
import { setTitle } from '@/plugins/utils';

import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to) => {
	setTitle(to.meta.title as string);
	NProgress.done();
});
