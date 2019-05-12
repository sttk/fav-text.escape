# Benchmark of @fav/text.escape

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
