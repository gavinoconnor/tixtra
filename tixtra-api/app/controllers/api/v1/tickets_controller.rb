class Api::V1::TicketsController < ApplicationController

  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def show
   @ticket = Ticket.find_by(id: params[:id])
   render json: @ticket
  end

  def update
    @ticket = Ticket.first
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: { error: "Bad." }, status: :not_accepted
    end
  end

end
