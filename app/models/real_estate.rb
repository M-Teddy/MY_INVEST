class RealEstate < ApplicationRecord
  belongs_to :user
  TYPES = ["Appartement", "House", "Building", "Parking/Box", "Ground", "Commercial space", "Other","Flat"]
  CATEGORIES = ["Principal residence", "Secondary residence", "Rental property", "Other"]
  validates :address, presence: true, uniqueness: true
  validates :description, presence: true
  validates :type_of, presence: true, inclusion: { in: TYPES }
  validates :category, presence: true, inclusion: { in: CATEGORIES }
  validates :purchase_price, presence: true
  validates :floor_space, presence: true
  validates :year_of_construction, presence: true
  validates :date_of_purchase, presence: true
  has_one_attached :photo
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?



def gain
  if self.estimation && self.purchase_price
    (self.purchase_price - self.estimation)
  end
end

def self.all_purchase_price
  total = 0

  self.all.each do |f|
    total += f.purchase_price
  end
  total
end

def self.all_estimation
  total = 0

  self.all.each do |f|
    total == f.estimation
  end
  total
end

def self.all_gain
total = all_estimation - all_purchase_price
end
end
