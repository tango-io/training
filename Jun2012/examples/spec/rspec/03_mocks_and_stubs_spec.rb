require 'spec_helper'

# Stubs
# I have a method, it should return something specific
#
# Mocks
# I don´t have an object, I will create it
#

class Twitter
  def initialize(username, pass)
  end
end

class TwitterAccount

  attr_reader :username

  def initialize(person)
    @username = person.username
  end
end

class Person
  def tweets
    client = Twitter.new('user', 'pass')
    client.tweets
  end
end

describe Person, 'tweets' do
  before do
    Twitter.any_instance.stub tweets: [{id: 1}, {id: 2}]
  end

  it 'should have my tweets' do
    subject.tweets.should == [{id: 1}, {id: 2}]
  end
end

describe TwitterAccount do
  before do
    person = double username: 'Username'
    @info = TwitterAccount.new(person)
  end

  it 'should have the username' do
    @info.username.should == 'Username'
  end
end
