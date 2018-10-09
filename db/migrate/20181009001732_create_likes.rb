class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.references:users,     foreign_key: true,  null: false
      t.references:comments,  foreign_key: true,  null: false
    end
  end
end
