import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'

export default defineConfig([
	{
		// Apply to JS and Vue files in the project
		files: ['src/**/*.{js,vue}', 'test/**/*.js'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: babelParser,
				ecmaVersion: 2020,
				sourceType: 'module',
				requireConfigFile: false,
				babelOptions: {
					presets: ['@babel/preset-env']
				}
			}
		},
		rules: {
			// basic rules to match prior setup
			'arrow-parens': 0,
			'generator-star-spacing': 0,
			'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
		},
		ignores: ['build/*.js', 'config/*.js']
	}
])
