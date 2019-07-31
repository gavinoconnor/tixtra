class AddRequesterToRequests < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :requester, :integer
  end
end
