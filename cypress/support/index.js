/// <reference types="cypress" />

chai.use((_chai) => {
  // use "function" syntax to make sure when Chai
  // calls it, the "this" object points at Chai

  function testId(expectedValue) {
    const attr = 'data-test-id'
    if (expectedValue) {
      const value = this._obj.attr(attr)
      this.assert(
        value === expectedValue,
        `expected to find data-test-id="${expectedValue}", found value "${value}"`,
      )
    } else {
      // only confirm the "data-test-id" attribute is present

      this.assert(
        this._obj.attr(attr) !== undefined,
        `expected to find data-test-id attribute`,
      )
    }
  }
  _chai.Assertion.addMethod('testId', testId)
})
