class SessionsController < ApplicationController


  def login
    @user = User.find_by(username: params[:user][:username])
    if @user
      if @user.authenticate(params[:user][:password])
        render json: @user, status: 200
      else
        render :json => { :message => {password: ["Incorrect Password."]}}, status: 422
      end
    else
      render :json => { :message => {username: ["Username not found."]}}, status: 422
    end
  end





private

 def user_params
   params.require(:user).permit(:username,:password)
 end

end
