class Employee < ApplicationRecord
  belongs_to :department, class_name: 'Department', foreign_key: 'department_id'

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true
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
    "#{first_name} #{last_name}"
  end
end
