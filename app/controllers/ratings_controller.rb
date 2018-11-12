class RatingsController < ApplicationController
    def new
        @rating = Rating.new
    end
    
    def create
        @rating = Rating.new
        # todo
    end
    
    private
    
    def post_params
        params.require(:rating).permit(:user_id, :room_id, :stars)
    end
end
