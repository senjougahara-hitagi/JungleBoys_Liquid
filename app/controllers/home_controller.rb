class HomeController < ApplicationController
  def index
  	@rooms = Room.all.page params[:page]
  end
end
