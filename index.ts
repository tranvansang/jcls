const classDelim = ' '

// https://github.com/Microsoft/TypeScript/issues/28682

export const jcls = (...classNames: ReadonlyArray<string | boolean | null | undefined | 0 | -.0 | /*typeof NaN |*/ 0n>) => classNames
	.filter(Boolean)
	.join(classDelim)

export const rcls = (
	classNames: string,
	...toRemove: Array<string | boolean | null | undefined | 0 | -.0 | /*typeof NaN |*/ 0n | RegExp | ((cls: string) => any)>
) => {
	const toRemoveList = toRemove.filter(Boolean) as Array<string | RegExp | ((cls: string) => any)>
	return classNames
		.split(classDelim)
		.filter(cl => !toRemoveList.some(cls => typeof cls === 'string'
			? cls === cl
			: typeof cls === 'function'
				? cls(cl)
				: cls.test(cl)))
		.join(classDelim)
}
