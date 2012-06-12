require 'spec_helper'

class PersonDecorator
  def initialize(person)
    @person = person
  end

  def for_main_card
    {
      display_name: "#{@person.first_name} #{@person.last_name}",
      photo_url: @person.image.url
    }
  end
end

describe PersonDecorator do

  let(:image){ double(:image, url: 'www.daniel.com/avatar.jpg') }
  let(:person){
    double(:person,
      first_name: 'Daniel',
      last_name: 'Gaytan',
      image: image
    )
  }

  let(:person_decorator){ PersonDecorator.new(person) }

  describe '#for_main_card' do

    subject { person_decorator.for_main_card }

    its([:display_name]){ should == 'Daniel Gaytan' }
    its([:photo_url]){ should == 'www.daniel.com/avatar.jpg' }

  end
end
