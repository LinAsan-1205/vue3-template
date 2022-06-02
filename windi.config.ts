import { defineConfig } from 'vite-plugin-windicss';
export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['src/**/*.{vue,tsx}'],
		exclude: ['node_modules', '.git', 'dist'],
	},
});
