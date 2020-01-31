# frozen_string_literal: true

module Api::V1
  class DemoController < ApplicationController
    # before_action :authenticate_user!

    def index
      if user_signed_in?
        render json: {success: true, message: 'hello from backend (signed in)'}, status: 200
      else
        render json: {success: true, message: 'hello from backend (signed out)'}, status: 200
      end
    end

  end
end
