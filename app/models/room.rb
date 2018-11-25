class Room < ApplicationRecord
    
    # validates :room_info, presence: 
    
    validate do |record|
        record.validate_photo_quota
    end
    
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
    
    def validate_photo_quota
    #   return unless self.user
    #   if self.pictures.count > 5
    #     errors.add(:error, "Over quota")
    #   end
    end
end
