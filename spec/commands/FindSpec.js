describe("Find", function() {
  var Find = require('../../lib/commands/find')

  var subject

  beforeEach(function() {
    subject = new Find()
  })

  it("test should return true", function() {
    let result = subject.test()

    expect(result).toBeTruthy()
  })
})
