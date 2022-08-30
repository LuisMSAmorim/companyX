class VacationsRepository

  def initialize
    @model = Vacation
  end

  def get_all
    @model.all
      .joins(:employee)
      .select('vacations.id as id, vacations.start_date as start_date, vacations.end_date as end_date, employees.name as employee_name, employees.id as employee_id, employees.email as employee_email, employees.department_id as department_id')
      .order('vacations.end_date desc')
  end

  def get_by_id(id)
    @model
    .joins(:employee)
    .select('vacations.id as id, vacations.start_date as start_date, vacations.end_date as end_date, employees.name as employee_name, employees.id as employee_id, employees.email as employee_email, employees.department_id as department_id')
    .find(id)
  end
end
