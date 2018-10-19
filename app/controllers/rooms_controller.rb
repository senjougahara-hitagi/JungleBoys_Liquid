class RoomsController < ApplicationController
    def index
        # if current_user.is_admin
        # end
    end
    
    def new
       @room = Room.new 
    end
    
    def create
        @room = Room.new(post_params)
        if @room.save
            redirect_to home_index_path
        else
            render :new
        end
    end
    
    def show
        
    end
    
    def post_params
      params.require(:room).permit(:room_name, :address, :cost_per_night,
                        :type_of_room, :num_of_bedrooms, :num_of_beds,
                        :num_of_guests, :num_of_baths, :amentities, :pictures, 
                        :contact_host)
    end    
end
