require 'spec_helper'

class Calculator
end

describe Calculator do
  it 'should set the subject' do
    subject.class.should == Calculator
  end

  context 'when the calculation in infinite' do
    it 'should display Error' do
      subject.class.should == Calculator
    end
  end

  describe 'a string' do
    it{ subject.class.should == Calculator}
  end
end

describe 'a string' do
  it{ should eq 'a string' }
end
