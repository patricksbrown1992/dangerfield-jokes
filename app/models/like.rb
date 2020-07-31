class Like < ApplicationRecord
    validates :user_id, :joke_id, presence: true
    belongs_to :user
end