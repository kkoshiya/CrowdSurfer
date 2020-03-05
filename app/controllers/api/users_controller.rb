class Api::UsersController < ApplicationController
  

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: ["you signed in"], status: 200
    else
      render json: ["Nobody signed in"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end