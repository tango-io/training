class QuadraticEquationSolver
  attr_reader :a, :b, :c, :str

  def initialize(*options)
    if options.length == 1
      @str = options[0].delete(' ')
      get_literals
    else
      @a, @b, @c = options[0], options[1], options[2]
    end
  end

  def solve
    raise Exception unless square_part.real?
    [x1, x2]
  end

  private

  def get_literals
    @a, @b, @c = str.split(/x\^2|x/).map &:to_i
  end

  def square_part
    (b**2 - 4*a*c)**(1/2.0)
  end

  def x1
    (-1*b + square_part) / 2*a.to_f

  end

  def x2
    (-1*b - square_part) / 2*a.to_f
  end

end

describe QuadraticEquationSolver do

  subject{ QuadraticEquationSolver.new(*input).solve }

  context 'when it is a real solution' do

    # (x+1)(x+2) = x^2 + 3x + 2
    describe 'given the values for A, B and C' do

      let(:input){ [1, 3, 2] }

      it 'should solve the equation' do
        should =~ [-1, -2]
      end
    end

    describe 'given a string with the equation' do

      let(:input){ '12x^2 + 16x - 3' }
      # (2x + 3)(6x - 1) = 12x^2 + 16x -3

      it 'should solve the equation' do
        should =~ [-(3/2.0), 1/6.0]
      end
    end
  end

  context 'when it is an imaginary solution' do
    # 4x^2 + 3x + 2
    let(:input){ [4, 3, 2] }

    it 'should raise an error' do
      expect{ subject }.should raise_error Exception
    end
  end
end
