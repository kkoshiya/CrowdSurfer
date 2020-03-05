class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all 
    render json: "api/projects/index"
  end

  def show
    @project = Project.find(params[:id])
    render json: "api/projects/show"
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
      :body,
      :category,
      :date,
      :current_total,
      :target
    )
  end

end
