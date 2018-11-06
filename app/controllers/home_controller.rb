class HomeController < ApplicationController
  def index
  	@rooms = Room.order(id: :desc).page(params[:page]).per(4)
  end
end
