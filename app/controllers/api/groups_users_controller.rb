class Api::GroupsUsersController < ApplicationController
  def create
    @groups_user = GroupsUser.new(groups_user_params)

    if @groups_user.save!
      render "api/groups_users/show"
    else
      render json: @groups_user.errors, status: 422
    end
  end

  def destroy
    @groups_user = GroupsUser.find(params[:id])
    @groups_user.destroy
    render "api/groups_users/show"
  end

  def groups_user_params
    params.require(:groups_user).permit(:group_id, :user_id)
  end
end
