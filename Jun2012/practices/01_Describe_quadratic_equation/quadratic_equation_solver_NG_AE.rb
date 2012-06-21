class QuadraticEquationSolver
  attr_reader :a, :b, :c

  def initialize(*options)
    if options.length == 1
      parseString(options[0]);
    else
      @a, @b, @c = options[0], options[1], options[2]
    end
  end

  def solve
    raise Exception unless square_part.real?
    [x1,x2]
  end

  private

  def parseString string
     values = string.gsub(/\s/,"").scan(/^\d+|\+|-\d+[x|y]|\+|-\d+$/)
    if values.count < 3
       @a = 1
       @b = values[0].to_i
       @c = values[1].to_i
    else
       @a = values[0].to_i
       @b = values[1].to_i
       @c = values[2].to_i
    end
  end


  def square_part
    ((b**2) - (4*a*c))**(1/2.to_f).to_f
  end

  def x1
    ((-1*b + square_part) / 2*a.to_f).to_f

  end

  def x2
    ((-1*b - square_part) / 2*a.to_f).to_f
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
        #@quadratic_equation_solver = QuadraticEquationSolver.new('x^2 + 3x + 2')
        @quadratic_equation_solver = QuadraticEquationSolver.new('12x^2 - 16x - 3')
      end

      it 'should solve the equation' do
        @quadratic_equation_solver.solve.should =~ [1.5,-0.166666667]
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
