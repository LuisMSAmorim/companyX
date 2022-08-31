class AddIsOnVacationToEmployeeAgain < ActiveRecord::Migration[7.0]
  def change
    add_column :employees, :is_on_vacation, :boolean, :default => false
  end
end
