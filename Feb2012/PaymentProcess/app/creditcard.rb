class Creditcard
  attr_accessor :name,:number, :cvv, :expdate
 
  def initialize(name,number, cvv, expdate)
    @name = name
    @number = number
    @cvv = cvv
    @expdate = expdate
  end
end
