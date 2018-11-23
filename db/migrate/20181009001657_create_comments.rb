class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer:parent_id, null: true
      t.references:user, foreign_key: true,  null: false
      t.references:room, foreign_key: true,  null: false
      t.string:text_content,    limit: 500,   null: false
      t.timestamps
    end
  end
end
