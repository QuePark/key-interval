'use strict';

module.exports = class KeyInterval {
	constructor() {
		this.data = {};
	}

	setTimeInterval(callback, values, key, time = 1000) {
		if (
			(typeof key === 'string' ||
				typeof key === 'number' ||
				typeof key === 'symbol') &&
			this.data[key] === undefined &&
			'function' &&
			Array.isArray(values) &&
			typeof time === 'number'
		) {
			this.data[key] = {
				id: setInterval(() => callback(...values), time),
				callback,
				values,
				time,
				status: true,
			};
			return this.data[key];
		}
	}

	setEndTime(key, time = 1000) {
		if (typeof time === 'number') {
			setTimeout(() => {
				this.clearTimeInterval(key);
			}, time);
		}
	}

	pauseTimeInterval(key) {
		if (
			typeof key === 'string' ||
			typeof key === 'number' ||
			typeof key === 'symbol'
		) {
			this.clearTimeInterval(key);
			this.data[key].id = -1;
			this._switchStatus(key);
		}
	}

	restartTimeInterval(originKey, time = 1000, cb, vals) {
		if (
			(typeof key === 'string' ||
				typeof key === 'number' ||
				typeof key === 'symbol') &&
			this.data[originKey] !== undefined &&
			!this.data[originKey].status
		) {
			const { callback, values } = this.data[originKey];
			let func = cb !== undefined && typeof cb === 'function' ? cb : callback;
			let arr = values;
			let msec =
				time !== undefined && typeof time === 'number'
					? time
					: this.data[originKey].time;
			if (vals !== undefined) {
				if (Array.isArray(vals)) {
					arr = vals.slice(0);
				} else {
					arr.push(vals);
				}
			}
			this.data[originKey].id = this.setTimeInterval(
				func,
				arr,
				msec,
				originKey,
			);
			this._switchStatus(key);
		}
	}

	clearTimeInterval(key) {
		if (
			(typeof key === 'string' ||
				typeof key === 'number' ||
				typeof key === 'symbol') &&
			this.data[key] !== undefined
		) {
			clearInterval(this.data[key].id);
			delete this.data[key];
		}
	}

	clearAllInterval() {
		const keys = Object.keys(this.data);
		if (keys.length > 0) {
			keys.forEach((key) => this.clearTimeInterval(key));
		}
	}

	_switchStatus(key) {
		if (
			typeof key === 'string' ||
			typeof key === 'number' ||
			typeof key === 'symbol'
		) {
			this.data[key].status = !this.data[key].status;
		}
	}
};
