require 'matrix'

class Lights

  attr_accessor :canvas

  def initialize
    @canvas = Matrix.build(10) { 0 }
  end

end
