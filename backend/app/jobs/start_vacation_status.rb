class StartVacationStatus
  include Sidekiq::Job
  sidekiq_options queue: 'StartVacationStatus'

  def perform(employee_id)
    employee = Employee.find(employee_id)
    return unless employee.present?

    employee.update(is_on_vacation: true)
  end
end
