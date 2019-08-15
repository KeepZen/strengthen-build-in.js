<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [start][1]
-   [stop][2]
-   [Array.prototype.last][3]
    -   [Examples][4]
-   [Array.prototype.first][5]
    -   [Examples][6]
-   [String.prototype.match][7]
    -   [Parameters][8]
-   [Exgexp.prototype.exec][9]
    -   [Parameters][10]
-   [Exgexp.prototype.test][11]
    -   [Parameters][12]
-   [Number.prototype.toFixed][13]
    -   [Parameters][14]
    -   [Examples][15]

## start

You can use it as whole:

```js
const {start} = require('@keepzen/strengthen-build-in.js');
start()
```

Or you can just use a part, juse use ExgExp reinforce  as fellow:

```js
const {start} = require('@keepzen/strengthen-build-in.js/ExgExp');
start()
```

## stop

Stop use the reinforce, recover to the buildin status.

Recover the whole status to buildin:

```js
const {stop} = require('@keepzen/strengthen-build-in.js');
stop();
```

Jest recover RegExp to buildin.

```js
const {stop} = require('@keepzen/strengthen-build-in.js/RegExp');
stop();
```

## Array.prototype.last

The last element in the `array`.

### Examples

```javascript
console.log([1].last == 1);
```

## Array.prototype.first

The first element in the `array`.

### Examples

```javascript
console.log([1].first == 1)
```

## String.prototype.match

Match from `index`.

### Parameters

-   `pattern` **([String][16] | ExgExp)** 
-   `index` **int** 

## Exgexp.prototype.exec

### Parameters

-   `str` **[String][16]** The string from which you want to exactor pattern.
-   `index` **int** Match from where to begin.

## Exgexp.prototype.test

### Parameters

-   `str` **[String][16]** The string be tested.
-   `index` **int** From where to begin the test, default is zero.

## Number.prototype.toFixed

### Parameters

-   `f` **float** , must not less than zero.

### Examples

```javascript
console.log((1).toFixed(2) === '01');
console.log((1).toFixed(2.2) === '01.00');
console.log((-1).toFixed(2) === '-1');
console.log((-1).toFixed(3.1) === '-01.0');
```

[1]: #start

[2]: #stop

[3]: #arrayprototypelast

[4]: #examples

[5]: #arrayprototypefirst

[6]: #examples-1

[7]: #stringprototypematch

[8]: #parameters

[9]: #exgexpprototypeexec

[10]: #parameters-1

[11]: #exgexpprototypetest

[12]: #parameters-2

[13]: #numberprototypetofixed

[14]: #parameters-3

[15]: #examples-2

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
