class HomeController < ApplicationController
  def index
  	@rooms = Room.all.page(params[:page]).per 6
  end
end
