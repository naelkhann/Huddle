class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: { base: "Couldn't find em", status: 404 }
    end
  end
end
