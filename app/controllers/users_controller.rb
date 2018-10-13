class UsersController < ApplicationController

  def create
  @user = User.new(user_params)
  if @user.save
    render :json => @user, status: 201
 else
   render :json => { :errors => @user.errors}
 end
end

def show
  @user = User.find_by(id: params[:id])
  render :json => @user
end



private

def user_params
   params.require("user").permit(
     :username,
     :email,
     :password,
     :password_confirmation
   )
 end

end
