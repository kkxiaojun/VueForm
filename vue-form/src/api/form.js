const axios = require('axios')

export function addForm(form, callback) {
  axios({
    method: 'post',
    url: 'api/form/add',
    data: {
      id: form.id,
      title: form.title,
      form: form.formItems
    }
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export function getForm(callback) {
  axios({
    method: 'get',
    url: 'api/form/find',
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}

export function getFormById(id, callback) {
  axios.get('api/form/id', {
    params: {
      id: id
    }
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}

export function removeForm(id, callback) {
  axios.get('api/form/delete', {
    params: {
      id: id
    }
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}

export function addFormData(id, form, callback) {
    axios({
        method: 'post',
        url: 'form/data/add',
        data: {
            id: id,
            form: form
        }
    })
}