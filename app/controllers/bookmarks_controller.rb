class BookmarksController < ApplicationController
  def create
    @bookmark = current_user.bookmarks.build(bookmark_params)
    @room = @bookmark.room
    if @bookmark.save
      @is_bookmarked = @bookmark
      respond_to :js
    else
      flash[:alert] = "Something went wrong..."
    end
  end
  
  def destroy
    @bookmark = Bookmark.find(params[:id])
    @room = @bookmark.room
    if @bookmark.destroy
      respond_to :js
    else
      flash[:alert] = "Something went wrong"
    end
  end
  
  private
  def bookmark_params
    params.permit(:user_id, :room_id)
  end
end