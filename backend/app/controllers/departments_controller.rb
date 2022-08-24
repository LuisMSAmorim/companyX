class DepartmentsController < ApplicationController
  before_action :set_department, only: %i[ show update destroy employees ]

  # GET /departments
  def index
    @departments = Department.all

    render json: @departments
  end

  # GET /departments/1
  def show
    render json: @department
  end

  # GET /departments/1/employees
  def employees
    render json: @department.employees
  end

  # POST /departments
  def create
    @department = Department.new(department_params)

    if @department.save
      render json: @department, status: :created, location: @department
    else
      render json: @department.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /departments/1
  def update
    if @department.update(department_params)
      render json: @department
    else
      render json: @department.errors, status: :unprocessable_entity
    end
  end

  # DELETE /departments/1
  def destroy
    @department.destroy
  end

  private
    def set_department
      @department = Department.find(params[:id])
    end

    def department_params
      params.require(:department).permit(:name)
    end
end
