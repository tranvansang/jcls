Object.defineProperty(exports, "__esModule", { value: true });
exports.rcls = void 0;
const classDelim = ' ';
function jcls(...classNames) {
	return classNames
		.filter(Boolean)
		.join(classDelim);
}
exports.default = jcls;
const rcls = (classNames, ...toRemove) => {
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
exports.rcls = rcls;
