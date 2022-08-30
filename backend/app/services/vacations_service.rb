class VacationsService < ApplicationService

  def get_all
    vacations_repository.get_all
  end

  def get_by_id(id)
    vacations_repository.get_by_id(id)
  end

  def update(vacation, params)
    return raise Unauthorized if date_is_in_past(params[:start_date])

    vacation.update(params)
  end

  def destroy(vacation)
    vacation_start_date = vacation.start_date
    return raise Unauthorized if date_is_in_past(vacation_start_date)
      
    vacation.destroy
  end

  private

  def vacations_repository
    @vacation_repository ||= VacationsRepository.new
  end
end
