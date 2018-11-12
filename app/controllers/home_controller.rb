class HomeController < ApplicationController
  def index
  	@rooms = Room.all.page(params[:page]).per(4)
  # 	@rooms = Room.find(:all, :conditions => ['name LIKE ?', "%#{[:room_name]}%"])
  end
end
