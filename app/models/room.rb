class Room < ApplicationRecord
    
    mount_uploaders :pictures, RoomImageUploader
    belongs_to :user
    serialize :pictures, JSON
    
    has_many :comments
    has_many :ratings
    
    scope :top_rated, -> {
        Room.left_joins(:ratings)
            .group(:id)
            .order('avg (ratings.stars) desc')
            .limit(5)
    }
end
