load 'gato.rb'

describe Gato do

  let(:game) do
    #player1 = Player.new :name=>"player1"
    #player2 = Player.new :name=>"player2"
    game = Gato.new('player 1', 'player 2')
  end

  context "when new" do

    [:player1,:player2,:winner,:positions].each do |attr|

      it "should have #{attr}" do
        game.should respond_to(attr)
      end

    end
  end

  it "should have 9 pair cordenades to fill" do
    game.positions.count
  end

end
