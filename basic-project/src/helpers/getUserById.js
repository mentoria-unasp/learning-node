function getUserById(users, id) {
  return users.find((user) => {
    return user.id === id;
  })
}

module.exports = getUserById;