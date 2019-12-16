// jsdom-global must be required before vue-test-utils,
// because vue-test-utils expects a DOM (real DOM, or JSDOM)
// to exist.
require('jsdom-global')();

const assert = require('assert')

const Vue = require('vue')
const VueTestUtils = require('@vue/test-utils')

const App = Vue.component('app', {
  data() {
    return {
      msg: 'Hello Vue Test Utils'
    }
  },

  template: `
    <div>{{ msg }}</div>
  `
})

const wrapper = VueTestUtils.shallowMount(App)

assert.strictEqual('Hello Vue Test Utils', wrapper.text())
