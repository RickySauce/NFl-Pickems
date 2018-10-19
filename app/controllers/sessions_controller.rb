class SessionsController < ApplicationController


  def login
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
        render json: @user, status: 200
    else
      render :json => { :message => {message: ["Incorrect Username or Password."]}}, status: 422
    end
  end





private

 def user_params
   params.require(:user).permit(:username,:password)
 end

end
