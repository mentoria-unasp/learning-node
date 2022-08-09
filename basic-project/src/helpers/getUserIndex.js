function getUserIndex(users, id) {
  return users.findIndex((user) => {
    return user.id === id;
  });
}

module.exports = getUserIndex;