class Api::HuddlesController < ApplicationController
  def show
    @huddle = Huddle.find(params[:id])
  end

  def create
    @huddle = Huddle.new(huddle_params)

    if @huddle.save!
      render "api/huddles/show"
    else
      render json: @huddle.errors, status: 422
    end
  end

  def destroy
    @huddle = Huddle.find(params[:id])
    @huddle.destroy
    render "api/huddles/show"
  end

  def huddle_params
    params.require(:huddle).permit(:title, :group_id,
    :description, :date, :location, :moderator_id)
  end
end
