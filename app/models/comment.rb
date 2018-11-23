class Comment < ApplicationRecord
    has_one :rating
    accepts_nested_attributes_for :rating

    has_many :comments
    belongs_to :parent,  class_name: "Comment" #-> requires "parent_id" column
    has_many :replies, class_name: "Comment", foreign_key: :parent_id, dependent: :destroy


    belongs_to :user
    belongs_to :room
end
