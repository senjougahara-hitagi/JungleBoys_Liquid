class Comment < ApplicationRecord
    has_one :rating, dependent: :destroy
    has_many :likes, dependent: :destroy
    accepts_nested_attributes_for :rating

    has_many :comments
    belongs_to :parent,  class_name: "Comment" #-> requires "parent_id" column
    has_many :replies, class_name: "Comment", foreign_key: :parent_id, dependent: :destroy

    belongs_to :user
    belongs_to :room

    def is_liked user
        if user
            Like.find_by(comment_id: id, user_id: user.id)
        end
    end
    
    def replies_amount
        self.replies.count == nil ? 0 : self.replies.count
    end
    
    def likes_amount
        self.likes.count == nil ? 0 : self.likes.count
    end
    
end
