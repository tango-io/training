require "tictactoe"

describe Tictactoe do

  let(:tictactoe)do
    Tictactoe.new("X","O")
  end

  [:player_one, :player_two].each do |attr|
    it "Should have #{attr}" do 
      tictactoe.should respond_to(attr)
    end
  end
  
  it "should place it only in one of nine spots" do
    tictactoe.move(tictactoe.player_one,10).should eql(nil)
  end

  it "should be one player at a time" 

  #it "shouldn't allow to place two symbols on a turn"

  #it "should be 4 turns at top for each player"

  #it "should win the player who aligns 3 symbols on a row"

end
