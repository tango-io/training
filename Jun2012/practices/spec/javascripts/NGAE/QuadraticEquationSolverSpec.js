describe("Quadratic Equation Solver", function(){

  describe("when it is real solution", function(){
    // (x+1)(x+2) = x^2 + 3x + 2
    describe("given the values for A, B and C",function(){

      beforeEach(function(){
        this.solver = new QuadraticEquationSolver(1, 3, 2) || {};
      });

      it("should solve the equation", function(){
        expect(this.solver).toBe([-1, -2]);
      });

    });

    describe("given a string with the equation", function(){

      beforeEach(function(){
        this.solver = new QuadraticEquationSolver('12x^2 - 16x - 3') || {};
      });

      it("should solve the equation", function(){
        expect(this.solver).toBe([1.5,-0.166666667]);
      });

    });

  });

  describe("when it is an imaginary solution", function(){

    beforeEach(function(){
      this.solver = new QuadraticEquationSolver(4, 3, 2) || {};
    });

    it("should raise an errer", function(){
      expect(this.solver).toBe('Error');
    });

  });

});
