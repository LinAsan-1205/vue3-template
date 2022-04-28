import { defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteCompression from 'vite-plugin-compression';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

import WindiCSS from 'vite-plugin-windicss';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
	return defineConfig({
		base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				imports: ['vue', 'vue-router'],
			}),
			WindiCSS(),
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
				symbolId: 'icon-[dir]-[name]',
			}),
			Components({
				dts: true,
				resolvers: [ElementPlusResolver()],
			}),
			VueSetupExtend(),
			viteCompression(),
		],
		server: {
			host: '0.0.0.0',
			port: 8080,
			open: true,
			proxy: {},
		},
		build: {
			cssCodeSplit: true,
			chunkSizeWarningLimit: 1000,
		},
		css: {
			preprocessorOptions: {}, //指定选项以传递给CSS预处理器
		},
	});
};
