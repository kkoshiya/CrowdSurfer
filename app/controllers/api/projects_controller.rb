class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all 
    # debugger
    # render json: "api/projects/index"
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
    if @project 
      @project.update(project_params)
      render :show
    else 
      render json: ["This is not a user"], status: 422
    end
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    #aws bull shit goes here
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, statuse: 422
    end

  end

  def project_params
    params.require(:project).permit(
      :title,
      :user_id,
      :description,
      :body,
      :category,
      :date,
      :current_total,
      :target
    )
  end

end
