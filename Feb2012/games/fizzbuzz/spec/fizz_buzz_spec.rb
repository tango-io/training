load 'fizz_buzz.rb'

describe FizzBuzz do
  let(:fizz_buzz) do
    FizzBuzz.new
  end

  [:fizz?, :buzz?, :fizz_buzz?, :none?, :type].each do |attr|
    it { fizz_buzz.should respond_to(attr) }
  end

  context 'when there is not passed any number' do
    it { fizz_buzz.number.should == 0 }
  end

  context 'when the object is initializated with the number 15' do

    let(:fizz_buzz) do
      FizzBuzz.new(15)
    end

    it { fizz_buzz.should be }
    it { fizz_buzz.type.should == "Fizz Buzz" }
    it { fizz_buzz.fizz_buzz?.should be_true }

  end

  context 'when the object is initializated with the number 5' do

    let(:fizz_buzz) do
      FizzBuzz.new(5)
    end

    it { fizz_buzz.should be }
    it { fizz_buzz.type.should == "Buzz" }
    it { fizz_buzz.buzz?.should be_true }

  end

  context 'when the object is initializated with the number 3' do

    let(:fizz_buzz) do
      FizzBuzz.new(3)
    end

    it { fizz_buzz.should be }
    it { fizz_buzz.type.should == "Fizz" }
    it { fizz_buzz.fizz?.should be_true }

  end

  context 'when the object is initializated with the number 88' do

    let(:fizz_buzz) do
      FizzBuzz.new(88)
    end

    it { fizz_buzz.should be }
    it { fizz_buzz.type.should == "None" }
    it { fizz_buzz.none?.should be_true }

  end

  context 'when the object is initializated with a non number' do

    let(:fizz_buzz) do
      FizzBuzz.new("Trololololol")
    end

    it { fizz_buzz.should be }
    it { fizz_buzz.type.should == "None" }
    it { fizz_buzz.number.should == 0 }
    it { fizz_buzz.none?.should be_true }

  end

end
