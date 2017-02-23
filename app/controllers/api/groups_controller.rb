class Api::GroupsController < ApplicationController
  def create
    @group = current_user.moderated_groups.new(group_params)
    debugger
    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render "api/groups/show"
  end

  def show
    @group = Group.find(params[:id])
  end

  def index
    @groups = Group.all
  end

  private
  def group_params
    params.require(:group).permit(:name, :description, :moderator_id, category_ids: [])
  end
end
