const classDelim = ' ';
// https://github.com/Microsoft/TypeScript/issues/28682
export default function jcls(...classNames) {
	return classNames
		.filter(Boolean)
		.join(classDelim);
}
export const rcls = (classNames, ...toRemove) => {
	const toRemoveList = toRemove.filter(Boolean);
	return classNames
		.split(classDelim)
		.filter(cl => !toRemoveList.some(cls => typeof cls === 'string'
			? cls === cl
			: typeof cls === 'function'
				? cls(cl)
				: cls.test(cl)))
		.join(classDelim);
};
