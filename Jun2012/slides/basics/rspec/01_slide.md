!SLIDE

# RSpec
## Day 2

!SLIDE

# TestUnit

!SLIDE bullets incremental

  * assert
  * assert_block
  * assert_equal
  * assert\_instance_of
  * assert\_kind_of
  * assert\_match

!SLIDE bullets incremental

  * assert_nil
  * assert\_not_same
  * assert\_nothing_raised
  * assert\_respond_to

!SLIDE smaller

    @@@ ruby

    require 'test/unit'

    class Test_SomethingToTest < Test::Unit::TestCase
      def setup
        #will be run prior to each test
      end

      # Replace this with your real tests.
      def test_truth
        assert true
      end
    end

!SLIDE smaller

    @@@ ruby
    class AboutArrays < EdgeCase::Koan
      def test_creating_arrays
        empty_array = Array.new
        assert_equal Array, empty_array.class
        assert_equal 0, empty_array.size
      end

      def test_array_literals
        array = Array.new
        assert_equal [], array

        array[0] = 1
        assert_equal [1], array

        array[1] = 2
        assert_equal [1, __], array

        array << 333
        assert_equal __, array
      end
    end

!SLIDE

# RSpec borns

!SLIDE
    @@@ ruby
    gem install rspec

    spec/
    spec/spec_helper.rb
    spec/namespace/class_spec.rb

!SLIDE
    @@@ ruby
    describe Order do
      context "with no items" do
        it "behaves one way" do
          # ...
        end
      end

      context "with one item" do
        it "behaves another way" do
          # ...
        end
      end
    end

!SLIDE bullets incremental

* An Order sums the prices of its line items
* An Order with no items behaves one way
* An Order with one item behaves another way

!SLIDE

# Excercise

!SLIDE

# Describe a second grade equation
## (15 mins)

!SLIDE

    @@@ ruby
    * target.should equal
    * target.should not_equal
    * target.should_not equal
    * target.should be
    * target.should be_predicate
    * target.should == 5

!SLIDE small

    @@@ ruby
    * target.should match <regex>
    * target.should be_an_instance_of
    * target.should have(<number>).things
    * target.should have_at_least(<number>).things
    * expect { ... }.to raise_error
    * target.should include(expected)
