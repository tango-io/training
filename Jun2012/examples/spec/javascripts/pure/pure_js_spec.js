describe('A spec writen in pure javascript', function(){
  it('should pass', function(){
    expect(1).toBe(1);
  })

  it('should include pure js files', function(){
    expect(window.object_in_js.key).toEqual('value')
  })
})
