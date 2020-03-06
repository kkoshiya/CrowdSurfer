@projects.each do |project|
  json.set! project.id do
    json.extract! project, :title, :body, :category, :user_id, :target, :user, :current_total
  end
end