class Api::V1::RequestsController < ApplicationController

  def index
    @requests = Request.all
    render json: @requests
  end

  def show
   render json: Request.find(params[:id])
 end

  def create
    @request = Request.new(params[:id])
    if @request.save
      redirect_to users_path
    end
  end

end
