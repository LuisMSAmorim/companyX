class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[show update destroy update_vacation_status]

  # GET /employees
  def index
    @employees = Employee.all

    render json: @employees
  end

  # GET /employees/1
  def show
    render json: @employee
  end

  # POST /employees
  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      render json: @employee, status: :created, location: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /employees/1
  def update
    if @employee.update(employee_params)
      render json: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /employees/1
  def destroy
    @employee.destroy
  end

  # PATCH /employees/1/update_vacation_status
  def update_vacation_status
    @employee.change_vacation_status(params[:start_vacation])
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.require(:employee).permit(:name, :birth_date, :start_date, :email, :city,
                                     :country, :street, :zipcode, :number, :state, :district, :department_id, :role)
  end
end
