require 'test_helper'

class Api::HuddlesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_huddles_show_url
    assert_response :success
  end

  test "should get create" do
    get api_huddles_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_huddles_destroy_url
    assert_response :success
  end

end
