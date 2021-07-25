# key-interval

Hello! This is a module for setInterval as class! Enjoy it!

## Install

```shell
npm i key-interval
```

## Usage

The package exports the `KeyInterval`class as default export.

```js
const KeyInterval = require('key-interval');
```

There are functions to help you.

### KeyInterval.setTimeInterval(callback, values, key[, time])

All of parameters are required except `time` (default is 1000 msec).

Params:
- `callback`(*required*): callback function.
- `values`(*required*): An array which has params for callback.
- `key`(*required*): The key for managing each interval instances.
- `time`(*optional*): The time to set interval. (default 1000 msec)

### KeyInterval.setEndTime(key[, time])

The `key` is required and `time` is optional (default is 1000 msec).

Params:
- `key`(*required*): The key for stopping an running interval of instance.
- `time`(*optional*): The time to set interval. (default 1000 msec)

### KeyInterval.pauseTimeInterval(key)

Params:
- `key`(*required*): The key to pause an running interval.

### KeyInterval.restartTimeInterval(key[, time[, callback[, values]]])

All of parameters are optional except `key`. Especially, default of time is 1000 msec.

Params:
- `key`(*required*): The key to restart interval of instance.
- `time`(*optional*): The time to set interval. (default 1000 msec)
- `callback`(*optional*): new callback function to set at exist key of puased interval.
- `values`(*optional*): An new array which has params for callback.

\* If you want to change callback or parameters for callback, you can set callback or values using this method.

### KeyInterval.clearTimeInterval(key)

Clear interval using key in instance. All data will be deleted.

Params:
- `key`(*required*): The key to clear an running interval.

### KeyInterval.clearAllInterval()

Clear all interval of instance.

Params: *no exist*

## Example

```js
const KeyInterval = require('key-interval');

const runTest = () => {
	const SETTIME = 1000;
	const ENDTIME = 3500;
	const TEST_A = 'testA';
	const TEST_B = 'testB';

	const testA = new KeyInterval();
	const testB = new KeyInterval();
	const cb = (str) => console.log(str);

	testA.setTimeInterval(cb, [TEST_A], TEST_A, SETTIME);
	testB.setTimeInterval(cb, [TEST_B], TEST_B, SETTIME);

	testA.setEndTime(TEST_A, ENDTIME);
	testB.setEndTime(TEST_B, ENDTIME);
};

runTest();
```

## RUN TEST

You can test this module with script `npm test` or `npm run test`.

```shell
node node_modules/key-interval/test.js
```