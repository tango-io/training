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

  def tweets
    connection
    return tweets
  end
end

class TwitterAccount

  attr_reader :user

  def initialize(options)
    @user = options[:username]
    @pass = options[:pass]
  end

  def username
    @user
  end

  def info
    [@user, @pass]
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
    person = {username: 'Username', pass: 'asdasdas'}
    @info = TwitterAccount.new(person)
  end

  it 'should have the username' do
    @info.username.should == 'Username'
  end

  it 'should return the info in an array' do
    @info.info.should == ['Username', 'asdasdas']
  end
end
