class VacationsService < ApplicationService
  def get_all
    vacations_repository.get_all
  end

  def get_by_id(id)
    vacations_repository.get_by_id(id)
  end

  def create(params)
    raise Unprocessable, 'Employee already has a scheduled vacation for this period' if employee_has_vacation_in_period?(params)

    vacation = Vacation.create(params)
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

  def employee_has_vacation_in_period?(params)
    vacations_repository.get_employee_vacations_on_period(params[:employee_id], params[:start_date].to_date, params[:end_date].to_date).any?
  end

  def vacations_repository
    @vacation_repository ||= VacationsRepository.new
  end
end
