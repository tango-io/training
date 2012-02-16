class TicTacToe
  attr_accessor :user1, :user2, :user1_movements, :user2_movements, :user_moving, :movements, :next_user

  def initialize(user1, user2)
    @movements = 0
    @user1_movements = []
    @user2_movements = []
    @winner_combinations =[[00, 01, 02], [10, 11, 12], [20, 21, 22], [00, 11, 22], [20, 11, 02]] 
  end

  def move
    if @movements < 10
      if @user_moving == 'X'
        @user_moving = 'O'
        @user1_movements << coordenate
      else
        @user_moving = 'X'
        @user2_movements << coordenate
      end
      @movements += 1
      winner?
    else
      return 'Game over!'
    end
    move
  end

  def coordenate
    puts 'Enter coordenate: '
    gets.chomp
  end

  def winner?
    if @winner_combinations.include? @user1_movements
    end
  end

end
