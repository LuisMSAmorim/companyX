class UpdateEmployeeVacationStatus
  include Sidekiq::Job
  sidekiq_options queue: 'UpdateEmployeeVacationStatus'

  def perform
    start_vacation_employee_ids = Vacation.where(start_date: Date.today).pluck(:employee_id)

    Employee.where(id: start_vacation_employee_ids).update(is_on_vacation: true)

    finish_vacation_employee_ids = Vacation.where(end_date: Date.today).pluck(:employee_id)

    Employee.where(id: finish_vacation_employee_ids).update(is_on_vacation: false)
  end
end
