load 'tictactoe.rb'
describe TicTacToe do

  context 'when there are no users' do
    it 'should have user1 and user2 in order to start the game' do
      expect {TicTacToe.new}.to raise_error(ArgumentError, "wrong number of arguments (0 for 2)")
    end
  end

  context 'when there are users' do
    let(:tictactoe) do
      TicTacToe.new('X', 'O')
    end

    it 'should initialize with 0 movements' do
      tictactoe.movements.should equal(0)
    end

    it 'should allow user1 and user2' do
      tictactoe.should respond_to(:user1)
      tictactoe.should respond_to(:user2)
    end

    #How should I test this
    it 'should not allow the same user moving 2 consecutive times' do
      #tictactoe.user_moving = 'X'
      #tictactoe.move
      #tictactoe.user_moving.should eql('O')
    end

    it 'should ends when there are 9 movements' do
      tictactoe.movements = 10
      tictactoe.move.should eql('Game over!')
    end

    it 'each user should be able to pick one position' do
      tictactoe.should respond_to(:coordenate)
    end

    it 'should win when have 3 marks in line' do
    end

    describe 'Coordinate' do
      it 'should allow 2 numbers'
      it 'should allow  numbers from 0 to 2'
    end
  end

end
