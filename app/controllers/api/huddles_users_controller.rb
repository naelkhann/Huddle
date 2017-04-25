class Api::HuddlesUsersController < ApplicationController
  def create
    @huddles_user = HuddlesUser.new(huddles_users_params)

    if @huddles_user.save!
      render "api/huddles_users/show"
    else
      render json: @huddles_user.errors, status: 422
    end
  end

  def destroy
    @huddles_user = HuddlesUser.find(params[:id])
    @huddles_user.destroy
    render "api/huddles_users/show"
  end

  def show
    @huddles_user = HuddlesUser.find(params[:id])
  end

  def huddles_users_params
    params.require(:huddles_user).permit(:huddle_id, :user_id)
  end
end
