require 'matrix'

class Lines

  attr_accessor :canvas

  def initialize
    @canvas = Matrix.build(10) { 0 }
  end

end
