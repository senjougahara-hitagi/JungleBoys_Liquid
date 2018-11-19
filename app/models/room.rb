class Room < ApplicationRecord
    
    mount_uploaders :pictures, RoomImageUploader
    belongs_to :user
    serialize :pictures, JSON
    
    has_many :comments
    has_many :ratings
    has_many :bookmarks
    
    scope :top_rated, -> {
        Room.left_joins(:ratings)
            .group(:id)
            .order('avg (ratings.stars) desc')
            .limit(5)
    }
    
    def is_bookmarked user
        if user
            Bookmark.find_by(user_id: user.id, room_id: id) 
        end
    end
end
