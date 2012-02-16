load 'client.rb' 
load 'shipping.rb' 
load 'creditcard.rb' 
load 'payment.rb' 

alex = Client.new('Alejandlro','Espinoza', 'aluminio 819',nil,'colima')
shipping = Shipping.new('Alejandlro','Espinoza', 'aluminio 819',nil,'colima')
cc1 = Creditcard.new('Banamex','3334','033','2012')
p1 = Payment.new(alex,cc1)
