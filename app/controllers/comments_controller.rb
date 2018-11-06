class CommentsController < ApplicationController
    def new
        @comment = Comment.new
    end
    
    def create
        # @room = Room.find(params[:id])
        # @comment = @room.comments.build(params[:comment])
        @comment = Comment.new(post_params)
        # if @comment.save
        #     redirect_to root
        # end
        
        respond_to do |format|
            if @comment.save
                format.html { redirect_to room_path(1), notice: 'Comment được tạo thành công' }
                format.js   { render :layout => false }
                format.json { render :show, status: :created, location: @comment }
            else
                format.html { render :new }
                format.json { render json: @comment.errors, status: :unprocessable_entity }
            end
        end
    end

    private
    def post_params
        params.require(:comment).permit(:room_id, :user_id, :text_content)
    end
end
