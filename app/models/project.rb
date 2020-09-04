class Project < ApplicationRecord
  
  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :photo

  # has_many :backers,


end


