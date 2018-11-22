module RoomsHelper
    def show_amentities(amentities)
        amentities.split(',')
    end
    
    def max_index(room)
        room.pictures.size - 1
    end
end
