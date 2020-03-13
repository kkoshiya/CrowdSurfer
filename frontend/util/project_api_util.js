export const fetchProjects = () => {
  // debugger
  return $.ajax({
    url: 'api/projects',
    method: "GET"
  })
}

export const fetchProject = (projectId) => {
  return $.ajax({
  url: `api/projects/${projectId}`,
  method: "GET"
  })
}

export const updateProject = project => {
  return $.ajax({
    url: `api/projects/${project.id}`,
    method: "PATCH",
    data: { project }
  })
}