require "player"

class Tictactoe 

  attr_accessor :player_one, :player_two, :board, :last_move

  def initialize(first_player, second_player)

    @player_one = Player.new(first_player)
    @player_two = Player.new(second_player)

    @board = {
    }

    @last_move = ""
  end

  def move(player, place)
    if place.between?(1,9) && !@board[place]
      if(@last_move != player.symbol)
        @board[place] = player.symbol
        @last_move = player.symbol
        paint
      end
    end
  end

  def paint
    puts @board
  end

end
