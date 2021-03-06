class Api::UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user
      @user.update(user_params)
      render "api/users/show"
    else
      render json: ["This is not a user"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :balance)
  end


end