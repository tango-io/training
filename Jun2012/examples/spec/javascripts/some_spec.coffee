describe 'a describe', ->
  it 'should pass', ->
    expect(1).toBe(1)

  it 'should not pass', ->
    expect(2).toBe(1)

  it 'should respect the added matcher', ->
    expect(2).toBePlaying(1)

  it 'should not recognize other matchers', ->
    expect(2).toErrorMatcher(1)
