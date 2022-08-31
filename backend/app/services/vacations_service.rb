class VacationsService < ApplicationService
  def get_all
    vacations_repository.get_all
  end

  def get_by_id(id)
    vacations_repository.get_by_id(id)
  end

  def create(params)
    raise Unprocessable, "Empty start_date" if params[:start_date].empty?
    raise Unprocessable, 'Just future vacations can be created' if date_is_in_past(params[:start_date])

    vacation = Vacation.create(params)

    days_to_create_vacation_status = days_between_today_and(params[:start_date]).days
    StartVacationStatus.perform_at(days_to_create_vacation_status, vacation.employee_id) unless vacation.errors.any?

    days_to_remove_vacation_status = days_between_today_and(params[:end_date]).days
    FinishVacationStatus.perform_at(days_to_remove_vacation_status, vacation.employee_id) unless vacation.errors.any?

    vacation
  end

  def update(vacation, params)
    raise Unprocessable, 'Just future vacations can be updated' if date_is_in_past(params[:start_date])

    vacation.update(params)
  end

  def destroy(vacation)
    raise Unprocessable, 'Just future vacations can be deleted' if date_is_in_past(vacation.start_date)

    vacation.destroy
  end

  private

  def vacations_repository
    @vacation_repository ||= VacationsRepository.new
  end
end
