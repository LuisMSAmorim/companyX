class VacationsController < ApplicationController
  before_action :set_vacation, only: %i[show update destroy]

  # GET /vacations
  def index
    @vacations = vacations_service.get_all

    render json: @vacations
  end

  # GET /vacations/1
  def show
    @vacation = vacations_service.get_by_id(params[:id])

    render json: @vacation
  end

  # POST /vacations
  def create
    @vacation = vacations_service.create(create_params)

    if @vacation.errors.empty?
      render json: @vacation, status: :created
    else
      render json: @vacation.errors, status: :unprocessable_entity
    end
    rescue ApplicationService::Unprocessable => e
      render json: { errors: e.message }, status: :unprocessable_entity
  end

  # PATCH/PUT /vacations/1
  def update
    vacations_service.update(@vacation, update_params)

    render json: @vacation
  rescue ApplicationService::Unprocessable => e
    render json: { errors: e.message }, status: :unprocessable_entity
  rescue StandardError => e
    render json: { errors: @vacation.errors }, status: :unprocessable_entity
  end

  # DELETE /vacations/1
  def destroy
    vacations_service.destroy(@vacation)
  rescue ApplicationService::Unprocessable => e
    render json: { errors: e }, status: :unprocessable_entity
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

  def vacations_service
    @vacations_service ||= VacationsService.new
  end
end
