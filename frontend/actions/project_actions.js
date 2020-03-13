import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";


const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const fetchProjects = () => dispatch => {
  return APIUtil.fetchProjects().then((projects) => dispatch(receiveProjects(projects)));
};

export const fetchProject = (projectId) => dispatch => {
  return APIUtil.fetchProject(projectId).then((project) => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
  return APIUtil.updateProject(project).then(project => dispatch(receiveProject(project)))
}