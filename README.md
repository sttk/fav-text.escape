# [@fav/text.escape][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Escapes characters for various syntaxes and formats.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text.escape
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text.escape/` directory manually.*


## Usage

For Node.js:

```js
var escape = require('@fav/text.escape').RegExp;
escape('[@fav/text.escape]');  // => '\\[@fav/text\\.escape\\]'
console.log(escape('[@fav/text.escape]')); // => \[@fav/text\.escape\]
```

For Web browsers:

```html
<script src="fav.text.escape.min.js"></script>
<script>
var escape = fav.text.escape.RegExp;
escape('[@fav/text.escape]');  // => '\\[@fav/text\\.escape\\]'
console.log(escape('[@fav/text.escape]'));  // => \[@fav/text\.escape\]
</script>
```


## API

### <u>escape : object</u>

Is a set of functins to escape characters in a string.

This function set provides escapings for following syntaxes and formats:

- [RegExp](#regexp)
- [RegExpCharClass](#regexp_charclass)

**NOTE:** The functions in this set doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

<a name="regexp"></a>

#### <u>escape\['RegExp'\](source) : string</u>

Escapes special characters of Regular Expression.

The special characters which are escaped are as follows: `^$\.*+?()[]{}|`.

The specification of the special characters of Regular Expression comes from [ECMA-262 — 21.2 RegExp (Regular Expression) Objects](http://ecma-international.org/ecma-262/7.0/#sec-patterns).

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string


<a name="regexp_charclass"></a>

#### <u>escape\['RegExpCharClass'\](source) : string</u>

Escapes special characters of Regular Expression Character Class.

The special characters which are escaped are as follows: `-^]\`.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string


## Checked                                                                      

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text.escape/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text.escape
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.escape.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text.escape
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text.escape?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text-escape
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text.escape/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text.escape?branch=master
