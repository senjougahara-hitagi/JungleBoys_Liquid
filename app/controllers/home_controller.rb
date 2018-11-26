class HomeController < ApplicationController
  $limit = 12
  def index
    @search = Room.order(id: :desc).ransack params[:q]
    
    if (params[:limit].nil?)
      params[:limit] = $limit
  	  @rooms = @search.result.page(params[:page]).per $limit
    else
      $limit = params[:limit]
      @rooms = @search.result.page(params[:page]).per params[:limit]
    end
    
    @top = Room.top_rated
  end
end
