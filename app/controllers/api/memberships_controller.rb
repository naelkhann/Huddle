class Api::MembershipsController < ApplicationController
  def destroy
    @groups_user = current_user.groups_users.find_by_group_id(params[:group_id])
    @groups_user.destroy

    render "api/groups_users/show"
  end
end
