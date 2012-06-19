class QuadraticEquationSolver
  attr_reader :a, :b, :c

  def initialize(*options)
    if options.length == 1
      @str=options[0]
    else
      @a, @b, @c = options[0], options[1], options[2]
    end
  end

  def solve
    raise Exception unless square_part.real?
    [x1, x2]
  end

  private

  def square_part
    (b**2 - 4*a*c)**(1/2.to_f)
  end

  def x1
    (-1*b + square_part) / 2*a.to_f

  end

  def x2
    (-1*b - square_part) / 2*a.to_f
  end
  
  def get_literals
    eq_string = str
    eq_string.delete!(' ')

    #x^2+3x+x
    #This remove the innecesary chars
    eq_string.gsub!(/\s|x|\^2/,"").split(/\+|-/)

    #This replace empty literal by 1str.map {|i| i.empty? ? "1" : i}
    eq_string.map! {|i| i.empty? ? 1 : i.to_i}
    @a, @b, @c = eq_string[0], eq_string[1], eq_string[2]
    eq_string  
  end
end

describe QuadraticEquationSolver do
  context 'when it is a real solution' do
    # (x+1)(x+2) = x^2 + 3x + 2
    describe 'given the values for A, B and C' do
      before do
        @quadratic_equation_solver = QuadraticEquationSolver.new(1, 3, 2)
      end

      it 'should solve the equation' do
        @quadratic_equation_solver.solve.should =~ [-1, -2]
      end
    end

    describe 'given a string with the equation' do
      before do
        @quadratic_equation_solver = QuadraticEquationSolver.new('x^2 + 3x + 2')
      end

      it 'should return literals' do
        @quadratic_equation_solver.get_literals.sould = [1,3,2]
      end
      
      it 'should solve the equation' do
        @quadratic_equation_solver.solve.should =~ [-1, -2]
      end
    end
  end

  context 'when it is an imaginary solution' do
    # 4x^2 + 3x + 2
    before do
      @quadratic_equation_solver = QuadraticEquationSolver.new(4, 3, 2)
    end

    it 'should raise an error' do
      expect{ @quadratic_equation_solver.solve }.should raise_error Exception
    end
  end
end
