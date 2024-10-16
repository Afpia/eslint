declare module '@afpia/eslint' {
	declare type Eslint = (
		options?: import('@antfu/eslint-config').OptionsConfig & {
			jsxA11y?: boolean
		},
		...configs: import('@antfu/eslint-config').Awaitable<
			| import('@antfu/eslint-config').TypedFlatConfigItem
			| import('@antfu/eslint-config').TypedFlatConfigItem[]
			| import('@antfu/eslint-config').FlatConfigComposer<any, any>
			| Linter.Config[]
		>[]
	) => import('@antfu/eslint-config').FlatConfigComposer<
		import('@antfu/eslint-config').TypedFlatConfigItem,
		import('@antfu/eslint-config').ConfigNames
	>

	export const eslint: Eslint
}
