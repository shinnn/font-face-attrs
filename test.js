/*!
 * font-face-attrs | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/font-face-attrs
*/
'use strict';

var test = require('tape');

var spec = 'should be equivalent of the expected value.';
var expected = [
  'font-family',
  'font-style',
  'font-variant',
  'font-weight',
  'font-stretch',
  'font-size',
  'unicode-range',
  'units-per-em',
  'panose-1',
  'stemv',
  'stemh',
  'slope',
  'cap-height',
  'x-height',
  'accent-height',
  'ascent',
  'descent',
  'widths',
  'bbox',
  'ideographic',
  'alphabetic',
  'mathematical',
  'hanging',
  'v-ideographic',
  'v-alphabetic',
  'v-mathematical',
  'v-hanging',
  'underline-position',
  'underline-thickness',
  'strikethrough-position',
  'strikethrough-thickness',
  'overline-position',
  'overline-thickness'
];

test('require(\'font-face-attrs\')', function(t) {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.fontFaceAttrs', function(t) {
  t.plan(1);

  global.window = {};
  require(require('./bower.json').main);
  t.deepEqual(window.fontFaceAttrs, expected, spec);
});
