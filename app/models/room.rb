class Room < ApplicationRecord
include SearchCop
    
    search_scope :search do
        attributes :room_name, :cost_per_night, :address, :amentities, :contact_host
        attributes user: "user.name"
    end
    
    mount_uploaders :pictures, RoomImageUploader
    belongs_to :user
    serialize :pictures, JSON
    
    has_many :comments
end
