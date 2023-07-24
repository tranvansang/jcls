'use strict'
module.exports = jcls
exports.rcls = rcls

const classDelim = ' '

function jcls(...classNames) {
	return classNames
		.filter(Boolean)
		.join(classDelim)
}

function rcls(classNames, ...toRemove){
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
