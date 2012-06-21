describe 'QuadraticEquationSolver', ->
  describe 'given the values for A, B, C', ->
    result = QuadraticEquationSolver.solve [1, 3, 2]
    
    it 'should solve the equation', ->
      expect(result).toBe([-1, -2])

  describe 'given a string with the equation', ->
    result = QuadraticEquationSolver.solve '12x^2 + 16x - 3'
    
    it 'should solve the equation', ->
      expect(result).toBe([1/6, -1.5])

  describe 'when it is an imaginary solution', ->
    result = QuadraticEquationSolver.solve [4, 3, 2]
    
    it 'should solve the equation', ->
      expect(result).toBe(Nan)
