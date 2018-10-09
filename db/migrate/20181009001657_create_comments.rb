class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references:users, foreign_key: true,  null: false
      t.references:rooms, foreign_key: true,  null: false
      t.string:text_content,    limit: 500,   null: false
      t.time:time,                            null: false
    end
  end
end
