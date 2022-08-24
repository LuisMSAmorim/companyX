class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :string
      t.string :last_name
      t.date :birth_date
      t.date :start_date
      t.string :email
      t.string :city
      t.string :country
      t.string :street
      t.string :zipcode
      t.string :number
      t.string :state
      t.string :district

      t.timestamps
    end
  end
end
