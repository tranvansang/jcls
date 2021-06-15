const classDelim = ' '

export const jcls = (...classNames: ReadonlyArray<string | boolean | null | undefined>) => classNames
	.filter(Boolean)
	.join(classDelim)

export const rmcls = (
	classNames: string,
	...toRemove: Array<string | RegExp | undefined | boolean | null | ((cls: string) => any)>
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
