# Benchmark of @fav/text.escape

## v1.0.5

### RegExp

Comparing with following modules:

- [lodash.escapeRegExp](https://www.npmjs.com/package/lodash)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [regexp.escape](https://www.npmjs.com/package/regexp.escape)
- [escape-regexp](https://www.npmjs.com/package/escape-regexp)

|                         | @fav/text.escape(1.0.5) | lodash(4.17.11)    | escape-string-regexp(2.0.0) | regexp.escape(1.0.2) | escape-regexp(0.0.1) |
|:------------------------|------------------------:|-------------------:|----------------------------:|---------------------:|---------------------:|
| No special characters   |       1,856,966 ops/sec | 16,518,606 ops/sec |           2,099,997 ops/sec |    1,960,307 ops/sec |    1,228,365 ops/sec |
| Many special characters |         800,839 ops/sec |    752,001 ops/sec |             851,938 ops/sec |      806,670 ops/sec |      623,944 ops/sec |

- Platform: Node.js 10.15.3 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

### HTML

Comparing with following modules:

- [lodash.escape](https://www.npmjs.com/package/lodash)
- [escape-html](https://www.npmjs.com/package/escape-html)

|                           | @fav/text.escape(1.0.5) | lodash(4.17.11)    | escape-html(1.0.3) |
|:--------------------------|------------------------:|-------------------:|-------------------:|
| No special characters     |      17,912,778 ops/sec | 16,597,336 ops/sec | 16,980,288 ops/sec |
| Single special characters |       2,643,373 ops/sec |  1,558,904 ops/sec |  4,277,807 ops/sec |
| A few special characters  |       1,340,773 ops/sec |  1,199,075 ops/sec |  3,384,988 ops/sec |
| Many special characters   |       1,399,200 ops/sec |    516,773 ops/sec |  2,623,528 ops/sec |

- Platform: Node.js 10.15.3 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB


## v1.0.4

### RegExp

Comparing with following modules:

- [lodash.escapeRegExp](https://www.npmjs.com/package/lodash)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [regexp.escape](https://www.npmjs.com/package/regexp.escape)
- [escape-regexp](https://www.npmjs.com/package/escape-regexp)

|                         | @fav/text.escape(1.0.4) | lodash(4.17.11)    | escape-string-regexp(2.0.0) | regexp.escape(1.0.2) | escape-regexp(0.0.1) |
|:------------------------|------------------------:|-------------------:|----------------------------:|---------------------:|---------------------:|
| No special characters   |       2,231,794 ops/sec | 23,117,094 ops/sec |           2,224,370 ops/sec |    2,277,164 ops/sec |    1,615,208 ops/sec |
| Many special characters |         901,855 ops/sec |    857,647 ops/sec |           1,037,310 ops/sec |      915,957 ops/sec |      756,432 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

### HTML

Comparing with following modules:

- [lodash.escape](https://www.npmjs.com/package/lodash)
- [escape-html](https://www.npmjs.com/package/escape-html)

|                           | @fav/text.escape(1.0.4) | lodash(4.17.11)    | escape-html(1.0.3) |
|:--------------------------|------------------------:|-------------------:|-------------------:|
| No special characters     |      21,464,961 ops/sec | 22,533,968 ops/sec | 19,781,193 ops/sec |
| Single special characters |       3,060,584 ops/sec |  1,750,130 ops/sec |  5,399,406 ops/sec |
| A few special characters  |       1,471,390 ops/sec |  1,480,854 ops/sec |  3,908,194 ops/sec |
| Many special characters   |       1,465,911 ops/sec |    601,136 ops/sec |  3,000,612 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB


## v1.0.3

### RegExp

Comparing with following modules:

- [lodash.escapeRegExp](https://www.npmjs.com/package/lodash)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [regexp.escape](https://www.npmjs.com/package/regexp.escape)
- [escape-regexp](https://www.npmjs.com/package/escape-regexp)

|                         | @fav/text.escape(1.0.3) | lodash(4.17.11)    | escape-string-regexp(2.0.0) | regexp.escape(1.0.2) | escape-regexp(0.0.1) |
|:------------------------|------------------------:|-------------------:|----------------------------:|---------------------:|---------------------:|
| No special characters   |       2,033,212 ops/sec | 20,675,119 ops/sec |           2,090,683 ops/sec |    1,958,866 ops/sec |    1,410,702 ops/sec |
| Many special characters |         893,442 ops/sec |    745,030 ops/sec |             739,818 ops/sec |      655,894 ops/sec |      522,958 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB


### HTML

Comparing with following modules:

- [lodash.escape](https://www.npmjs.com/package/lodash)
- [escape-html](https://www.npmjs.com/package/escape-html)

|                           | @fav/text.escape(1.0.3) | lodash(4.17.11)    | escape-html(1.0.3) |
|:--------------------------|------------------------:|-------------------:|-------------------:|
| No special characters     |       5,328,728 ops/sec | 19,850,123 ops/sec | 16,706,498 ops/sec |
| Single special characters |       1,752,454 ops/sec |  1,561,495 ops/sec |  4,324,057 ops/sec |
| Many special characters   |         692,492 ops/sec |    438,684 ops/sec |  2,599,129 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB
