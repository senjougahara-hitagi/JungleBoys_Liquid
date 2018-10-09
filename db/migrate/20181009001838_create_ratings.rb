class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.references:users,     foreign_key: true,  null: false
      t.references:rooms,     foreign_key: true,  null: false
      t.integer:stars,                            null: false
    end
  end
end
