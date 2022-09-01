class VacationsService < ApplicationService
  def get_all
    vacations_repository.get_all
  end

  def get_by_id(id)
    vacations_repository.get_by_id(id)
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
