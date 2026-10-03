const assert = require('assert');
const app = require('./server');

try {
  assert.strictEqual(typeof app, 'function', 'App must export an express instance');
  console.log('✔ All tests passed.');
  process.exit(0);
} catch (err) {
  console.error('✖ Test failed:', err.message);
  process.exit(1);
}
