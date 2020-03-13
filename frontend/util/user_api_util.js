export const update = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  })
}

export const getUser = userId => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: "GET"
  })
}