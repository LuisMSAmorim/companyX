class EmployeeService < ApplicationService 

  def create(params:)
    employee = Employee.new(params)
  end
end