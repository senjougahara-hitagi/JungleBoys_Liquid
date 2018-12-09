class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @saved = current_user.bookmarks
    @posts = current_user.rooms
  end
end
