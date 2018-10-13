class SessionController < ApplicationController


  def new
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
    render json: @user, status: 200
    else
    render json: {message: "Invalid Username Or Password"}, status: 406
    end
  end



end
