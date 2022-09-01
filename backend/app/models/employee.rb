class Employee < ApplicationRecord
  belongs_to :department, class_name: 'Department', foreign_key: 'department_id'

  validates :name, presence: true
  validates :role, presence: true
  validates :birth_date, presence: true
  validates :start_date, presence: true
  validates :email, presence: true, uniqueness: true, format: URI::MailTo::EMAIL_REGEXP
  validates :city, presence: true
  validates :state, presence: true
  validates :zipcode, presence: true
  validates :street, presence: true
  validates :country, presence: true
  validates :district, presence: true
  validates :number, presence: true
end
