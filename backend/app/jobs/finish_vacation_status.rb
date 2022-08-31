class FinishVacationStatus
  include Sidekiq::Job
  sidekiq_options queue: 'FinishVacationStatus'

  def perform(employee_id)
    employee = Employee.find(employee_id)
    return unless employee.present?

    employee.update(is_on_vacation: false)
  end
end
