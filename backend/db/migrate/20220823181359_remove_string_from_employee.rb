class RemoveStringFromEmployee < ActiveRecord::Migration[7.0]
  def change
    remove_column :employees, :string
  end
end
