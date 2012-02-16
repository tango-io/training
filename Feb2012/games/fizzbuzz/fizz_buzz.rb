class FizzBuzz

  attr_accessor :number

  def initialize(number = 0)
    @number = number.is_a?(Integer) ? number : 0
  end

  def fizz?
    modulus?(@number, 3)
  end

  def buzz?
    modulus?(@number, 5)
  end

  def fizz_buzz?
    fizz? && buzz?
  end

  def none?
    !fizz? || !buzz?
  end

  def type
    return "Fizz Buzz" if fizz_buzz?
    return "Buzz" if buzz?
    return "Fizz" if fizz?
    return "None" if none?
  end

  private

  def modulus?(x, y)
    return false if x < 1 #It doesn't allow negative numbers
    x % y == 0 ? true : false
  end
end
