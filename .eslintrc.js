module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'vue-global-api',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 21,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'vue/comment-directive': 'off',
		'vue/multi-word-component-names': 'off',
		'no-explicit-any': 'off',
	},
};
