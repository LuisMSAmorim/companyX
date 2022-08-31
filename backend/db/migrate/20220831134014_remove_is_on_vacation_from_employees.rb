class RemoveIsOnVacationFromEmployees < ActiveRecord::Migration[7.0]
  def change
    remove_column :employees, :is_on_vacation
  end
end
