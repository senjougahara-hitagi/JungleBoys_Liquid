class Room < ApplicationRecord
    
    mount_uploaders :pictures, RoomImageUploader
    belongs_to :user
    serialize :pictures, JSON
    
    has_many :comments
end
