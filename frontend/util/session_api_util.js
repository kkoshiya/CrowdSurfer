export const login = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const signup = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);