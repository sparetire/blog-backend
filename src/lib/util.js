let util = {
	// 是否是对象
	isObject: function (obj) {
		return obj != null && typeof obj === 'object';
	},
	// 是否是空串
	isEmptyStr: function (str) {
		return typeof str === 'string' && !str.length;
	},
	// 是否是null
	isNull: function (obj) {
		return obj === null;
	},
	// 是否是null或undefined
	isNullOrUndefined: function (obj) {
		return obj == null;
	},
	// 是否是undefined
	isUndefined: function (obj) {
		return obj === undefined;
	},
	// 是否是空串或null或undefined
	isNullStrOrNull: function (str) {
		return util.isEmptyStr(str) || str == null;
	},
	// 是否是对象或null或undefined
	isObjectOrNull: function (obj) {
		return obj === undefined || typeof obj === 'object';
	},
	isFunction: function (obj) {
		return typeof obj === 'function';
	},
	base64Encode: function (data) {
		return Buffer.from(data)
			.toString('base64');
	},
	base64DecodeToString: function (str, charset) {
		charset = charset || 'utf8';
		return Buffer.from(str, 'base64')
			.toString(charset);
	},
	base64Decode: function (str) {
		return Buffer.from(str, 'base64');
	},
	wait(time) {
		return new Promise(rs => setTimeout(rs, time));
	},
	getSetInterval(fn, interval, ctx) {
		return function () {
			let args = arguments;
			setTimeout(function () {
				let rst = fn.apply(ctx, args);
				if (rst) {
					return;
				}
				setTimeout(arguments.callee, interval);
			}, interval);
		};
	},
	debounce(fn, delay) {
		let timer = null;
		return function () {
			let ctx = this;
			let args = arguments;
			if (timer) {
				clearTimeout(timer);
				timer = setTimeout(function () {
					timer = null;
					fn.apply(ctx, args);
				}, delay);
				return false;
			}
			timer = setTimeout(function () {
				timer = null;
				fn.apply(ctx, args);
			}, delay);
		};
	},
	throttle(fn, delay) {
		let timer = null,
			firstTime = true;
		return function () {
			let ctx = this,
				args = arguments;
			if (firstTime) {
				fn.apply(ctx, args);
				return firstTime = false;
			}
			if (timer) {
				return false;
			}
			timer = setTimeout(function () {
				clearTimeout(timer);
				timer = null;
				fn.apply(ctx, args);
			}, delay);
		};
	}
};

module.exports = util;