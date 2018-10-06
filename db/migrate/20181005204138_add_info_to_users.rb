class AddInfoToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :fullname, :string, null: true, default: nil, limit: 50
    add_column :users, :gender, :boolean, null: true, default: nil
    add_column :users, :address, :string, null: true, default: nil, limit: 255
    add_column :users, :user_pic, :string, null: true, default: nil, limit: 20
  end
end
