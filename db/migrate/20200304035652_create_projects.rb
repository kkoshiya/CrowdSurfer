class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :title
      t.string :body
      t.string :catagory
      t.date :date
      t.integer :current_total
      t.integer :target

      t.timestamps
    end
  end
end
