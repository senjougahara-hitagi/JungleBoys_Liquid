class LikesController < ApplicationController
    # def new
    #     @like = Like.new
    # end

    def create
        @like = current_user.likes.build(post_params)
        if @like.save
            respond_to :js
        end
    end
        
    def destroy
        @like = Like.find(params[:id])
        if @like.destroy
            respond_to :js
        else
            flash[:error] = "Error"
        end
    end
    
    private
    def post_params
        params.permit(:user_id, :comment_id)
    end
end
