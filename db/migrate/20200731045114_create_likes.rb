class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :joke_id, null: false
      t.boolean :smile, :default => false
      t.boolean :frown, :default => false
      
      t.timestamps
    end
  end
end
