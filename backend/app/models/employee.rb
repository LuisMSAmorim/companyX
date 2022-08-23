class Employee < ApplicationRecord

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birth_date, presence: true
  validates :start_date, presence: true
  validates :email, presence: true, uniqueness: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zipcode, presence: true
  validates :street, presence: true
  validates :country, presence: true
  validates :district, presence: true
  validates :number, presence: true

  def name 
    "#{self.first_name} #{self.last_name}"
  end
end
