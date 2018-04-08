const axios = require('axios')

export function getUser(user, callback) {
  axios({
    method: 'post',
    url: 'api/user/find',
    data: {
      username: user.username,
      password: user.password
    }
  })
    .then(function (res) {
      callback(res)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addUser(user, callback) {
  axios({
    method: 'post',
    url: '/api/user/add',
    data: {
      username: user.username,
      password: user.password
    }
  })
    .then(res => {
      callback(res)
    })
}

export function updateUser(user, callback){
  axios({
    method: 'post',
    url: '/api/user/update',
    data: {
      password: user.password
    }
  })
    .then(res => {
      callback(res)
    })
}


