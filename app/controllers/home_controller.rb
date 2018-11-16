class HomeController < ApplicationController
  def index
    @search = Room.order(id: :desc).ransack params[:q]
    @rooms = @search.result.page(params[:page]).per params[:limit]
  # 	@rooms = Room.order(id: :desc).page(params[:page]).per(4)
    @top = Room.top_rated
  end
end
