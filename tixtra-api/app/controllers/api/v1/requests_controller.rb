class Api::V1::RequestsController < ApplicationController

  def index
    @requests = Request.all
    render json: @requests
  end

  def show
   render json: Request.find(params[:id])
 end

  def create
    @request = Request.create!(user_id: params[:user_id], ticket_id: params[:ticket_id], requester: params[:requester])

    render json: @request

  end

end
