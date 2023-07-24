'use strict'
module.exports = jcls
exports.default = jcls
exports.rcls = rcls

const classDelim = ' '

function jcls(...classNames) {
	return classNames
		.filter(Boolean)
		.join(classDelim)
}

const rcls = (classNames, ...toRemove) => {
	const toRemoveList = toRemove.filter(Boolean)
	return classNames
		.split(classDelim)
		.filter(cl => !toRemoveList.some(cls => typeof cls === 'string'
			? cls === cl
			: typeof cls === 'function'
				? cls(cl)
				: cls.test(cl)))
		.join(classDelim)
}
