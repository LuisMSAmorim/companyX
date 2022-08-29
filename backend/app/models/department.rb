class Department < ApplicationRecord
  has_many :employees, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  def employees
    Employee.where(department_id: id)
  end
end
