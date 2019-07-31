class AddContentToConversations < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :content, :string
  end
end
