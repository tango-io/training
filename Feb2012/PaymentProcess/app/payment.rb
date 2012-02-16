class Payment
   attr_accessor :client, :creditcard 
 
  def initialize(client, creditcard)
    @client = client
    @creditcard = creditcard
  end

  def pay(products)
    # Payment code here
  end
  
end
