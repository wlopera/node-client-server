let data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    const identifier = Number(id); // parseint(id)
    // const user = data.filter((user) => user.id === identifier)[0];
    const user = data.find((user) => user.id === identifier);
    return user;
  },
  createUser: (dataUser) => {
    // Data solo en memoria

    const newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },
  updateUser: (id, dataUser) => {
    const identifier = Number(id);
    const index = data.findIndex((user) => user.id === identifier);
    data[index] = {
      id: id,
      ...dataUser,
    };
    return data[index];
  },
  deleteUser: (id) => {
    const identifier = Number(id);
    data = data.filter((user) => user.id !== identifier);
    return id;
  },
};
