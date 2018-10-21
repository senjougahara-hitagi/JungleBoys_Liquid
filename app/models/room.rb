class Room < ApplicationRecord
    mount_uploader :pictures, RoomImageUploader
    
    belongs_to :user
end
