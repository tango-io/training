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

  subject{ PersonDecorator.new(person)}

  describe '#for_main_card' do
    it 'should have a display name' do
      subject.for_main_card.should have_key(:display_name)
    end

    it 'should have a photo url' do
      subject.for_main_card.should have_key(:photo_url)
    end
  end
end
