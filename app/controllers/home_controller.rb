class HomeController < ApplicationController
  def index
  	@rooms = Room.all.page(params[:page]).per(4)
  end
end
