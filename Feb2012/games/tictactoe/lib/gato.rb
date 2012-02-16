class Gato

  attr_accessor :player1,:player2,:winner,:positions
  def initialize(player_1, player_2)
    @player1 = Player.new(:name=>player_1)
    @player2 = Player.new(:name=>player_2)
    @positions = {"1:1"=>nil,"1:2"=>nil,"1:3" => nil, 
                  "2:1"=>nil,"2:2"=>nil,"2:3" => nil, 
                  "3:1"=>nil,"3:2"=>nil,"3:3" => nil }
  end

  def update(player,movement)
     @positions[movement]=player.name unless positions[movement].nil?

  end

  def movements(player)
     option1 = ["1:1","1:2","1:3"]
     option2 = ["1:1","2:2","3:3"]
     option3 = ["1:1","2:1","3:1"]
     option4 = ["1:2","2:2","3:2"]
     option5 = ["1:3","2:3","3:3"]
     option6 = ["1:3","2:2","3:1"]

     [option1,option2,option3,option4,option5].each do |opt|

       opt.each do |position|
         break unless player.name == @positions[position]
       end

     end
  end

  def reset

    positions.each do |key,value|
      @positions[:pos]=nil
    end

  end
end

class Player
  attr_accessor :name,:movments

  def initialize(name)
    @name = name
    @movment = 0
  end

  def movement
    @movement+=1
  end

end
 
    #A = Gato.new('player 1', 'player 2')
    #puts A.inspect
