class CreateBackings < ActiveRecord::Migration[5.2]
  def change
    create_table :backings do |t|
      t.integer :project_id
      t.integer :backer_id

      t.timestamps
    end
  end
end
