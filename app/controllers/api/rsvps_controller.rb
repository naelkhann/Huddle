class Api::RsvpsController < ApplicationController
  def destroy
    @huddles_user = current_user.huddles_users.find_by_huddle_id(params[:huddle_id])
    @huddles_user.destroy

    render "api/huddles_users/show"
  end
end
