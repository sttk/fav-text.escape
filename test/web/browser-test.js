(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.byPreposition('\\', '$%()*.');

describe('fav.text.escape.byPreposition', function() {

  it('Should escape special chars by preposition of 1st arg', function() {
    expect(escape('$%()*.\\')).to.equal('\\$\\%\\(\\)\\*\\.\\\\');
  });

  it('Should not escape other characters', function() {
    var str = 'ABC!@&{}';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('aaa $(bbb) %ccc% ddd*.eee\\fff')).to.equal(
      'aaa \\$\\(bbb\\) \\%ccc\\% ddd\\*\\.eee\\\\fff');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });

  it('Should escape only chars which are same with 1st arg when 2nd arg is ' +
  'not specified', function() {
    var escape2 = fav.text.escape.byPreposition('%');
    expect(escape2('a$&aa %bbb% ccc')).to.equal('a$&aa %%bbb%% ccc');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.byReplacement({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});

describe('fav.text.escape.byReplacement', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
  });

  it('Should not escape other characters', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape('"')).to.equal('&quot;');
    expect(escape('\'')).to.equal('&apos;');

    expect(escape('<>&"\'')).to.equal('&lt;&gt;&amp;&quot;&apos;');
  });

  it('Should escape only special characters in a string', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;,.?/ \r\n';
    expect(escape(str)).to.equal(str);
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; &quot;orange&quot;.&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.HtmlAttribute;

describe('fav.text.escape["HtmlAttribute"]', function() {

  it('Should escape special chars of HTML Attribute', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape('"')).to.equal('&quot;');
    expect(escape('\'')).to.equal('&apos;');

    expect(escape('<>&"\'')).to.equal('&lt;&gt;&amp;&quot;&apos;');
  });

  it('Should not escape other characters', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;,.?/ \r\n';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; &quot;orange&quot;.&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.HtmlEntity;

describe('fav.text.escape["HtmlEntity"]', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape(' ')).to.equal(' ');
    expect(escape('\n')).to.equal('\n');

    expect(escape('<>& \n')).to.equal('&lt;&gt;&amp; \n');
  });

  it('Should not escape other characters', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;\'",.?/\r';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; "orange".&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.RegExpCharClass;

describe('fav.text.escape["RegExpCharClass"]', function() {

  it('Should escape special chars of Regular Expression Character Class',
  function() {
    expect(escape('-')).to.equal('\\-');
    expect(escape('^')).to.equal('\\^');
    expect(escape(']')).to.equal('\\]');
    expect(escape('\\')).to.equal('\\\\');

    expect(escape('-^]\\')).to.equal('\\-\\^\\]\\\\');
  });

  it('Should not escape other characters', function() {
    expect(escape('')).to.equal('');
    expect(escape(' ')).to.equal(' ');
    expect(escape('abcdefghijklmnopqrstuvwxyz'))
      .to.equal('abcdefghijklmnopqrstuvwxyz');
    expect(escape('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
      .to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(escape('1234567890')).to.equal('1234567890');
    expect(escape('~`!@#$%&*()_=+[{}|:;\'"<,>./?'))
      .to.equal('~`!@#$%&*()_=+[{}|:;\'"<,>./?');
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('^a-z1-9]\\ABC')).to.equal('\\^a\\-z1\\-9\\]\\\\ABC');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.RegExp;

describe('fav.text.escape["RegExp"]', function() {

  it('Should escape special chars of Regular Expression', function() {
    expect(escape('^')).to.equal('\\^');
    expect(escape('$')).to.equal('\\$');
    expect(escape('\\')).to.equal('\\\\');
    expect(escape('.')).to.equal('\\.');
    expect(escape('*')).to.equal('\\*');
    expect(escape('+')).to.equal('\\+');
    expect(escape('?')).to.equal('\\?');
    expect(escape('(')).to.equal('\\(');
    expect(escape(')')).to.equal('\\)');
    expect(escape('[')).to.equal('\\[');
    expect(escape(']')).to.equal('\\]');
    expect(escape('{')).to.equal('\\{');
    expect(escape('}')).to.equal('\\}');
    expect(escape('|')).to.equal('\\|');

    expect(escape('^$\\.*+?()[]{}|'))
      .to.equal('\\^\\$\\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
  });

  it('Should not escape other characters', function() {
    expect(escape('')).to.equal('');
    expect(escape(' ')).to.equal(' ');
    expect(escape('abcdefghijklmnopqrstuvwxyz'))
      .to.equal('abcdefghijklmnopqrstuvwxyz');
    expect(escape('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
      .to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(escape('1234567890')).to.equal('1234567890');
    expect(escape('~`!@#%&_-=:;"\'<,>/')).to.equal('~`!@#%&_-=:;"\'<,>/');
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('^abc.{1,3}[1-9]*$'))
      .to.equal('\\^abc\\.\\{1,3\\}\\[1-9\\]\\*\\$');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
