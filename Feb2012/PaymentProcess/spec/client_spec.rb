$LOAD_PATH.unshift( File.join( File.dirname(__FILE__), '../app' ) )
require 'client'
require "rspec/expectations"

describe Client do

  let(:client) do
    Client.new
  end

  [:first_name, :last_name, :address, :address2, :city].each do |attr|
    it "Should have #{attr}" do 
      client.should respond_to(attr)
    end
  end
  
end
