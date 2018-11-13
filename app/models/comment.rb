class Comment < ApplicationRecord
    has_one :rating
    accepts_nested_attributes_for :rating

    belongs_to :user
end
