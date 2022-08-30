class VacationsController < ApplicationController
  before_action :set_vacation, only: %i[ show update destroy ]

  # GET /vacations
  def index
    @vacations = Vacation.all

    render json: @vacations
  end

  # GET /vacations/1
  def show
    render json: @vacation
  end

  # POST /vacations
  def create
    @vacation = Vacation.new(create_params)

    if @vacation.save
      render json: @vacation, status: :created
    else
      render json: @vacation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vacations/1
  def update
    if @vacation.update(vacation_params)
      render json: @vacation
    else
      render json: @vacation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vacations/1
  def destroy
    @vacation.destroy
  end

  private

  def set_vacation
    @vacation = Vacation.find(params[:id])
  end

  def create_params
    params.require(:vacation).permit(:employee_id, :start_date, :end_date)
  end

  def update_params
    params.require(:vacation).permit(:start_date, :end_date)
  end
end
