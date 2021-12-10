'use strict'
Object.defineProperty(exports, '__esModule', {value: true})

const classDelim = ' '

exports.rmcls = exports.jcls = void 0
const jcls = (...classNames) => classNames
	.filter(Boolean)
	.join(classDelim)

exports.jcls = jcls
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
exports.rmcls = rmcls
