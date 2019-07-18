class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :artist
      t.string :avatar
      t.datetime :date
      t.integer :venue_id

      t.timestamps
    end
  end
end
