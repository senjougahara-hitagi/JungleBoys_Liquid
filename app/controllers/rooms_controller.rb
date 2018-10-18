class RoomsController < ApplicationController
    def index
        if current_user.is_admin
        end
    end
    
    def create
        @title = "create"
    end
    
    def show
        
    end
        
end
