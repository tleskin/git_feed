class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_or_create_by_auth(auth)
    if user.save
      flash[:success] = "Log In Successful"
      session[:user_id] = user.id
      redirect_to user
    else
      flash.now[:success] = "Log In Unsuccessful. Please Try Again"
      render :new
    end
  end

  private

  def auth
    request.env["omniauth.auth"]
  end
end
