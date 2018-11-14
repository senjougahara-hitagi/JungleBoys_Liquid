class HomeController < ApplicationController
  def index
  	@rooms = Room.all.page(params[:page]).per(4)
  # 	@rooms = Room.find(:all, :conditions => ['name LIKE ?', "%#{[:room_name]}%"])
    @top = Room.top_rated
    # @top.order()
    # @top.each do |item|
    #   item.ratings.average(:stars)
    # end
    # @top = Room.ratings
  end
end
