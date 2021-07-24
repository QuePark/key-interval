const KeyInterval = require('./index.js');

const runTest = () => {
	const SETTIME = 1000;
	const ENDTIME = 3500;
	const KEY = 'test';
	const RUNNING =
		'✅ Running three times.\nSetting time is 1s.\nIt will be stoped after 3.5s from first output.\n';

	const test = new KeyInterval();
	const cb = (str) => console.log(str);

	test.setTimeInterval(cb, [RUNNING], KEY, SETTIME);

	test.setEndTime(KEY, ENDTIME);
};

runTest();
