const axios = require('axios')

export function addForm(form, callback) {
  console.log(form)
  axios({
    method: 'post',
    url: 'api/form/add',
    data: {
      id: form.id,
      from: form.from,
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

export function addFormData(data, callback) {
  axios({
    method: 'post',
    url: 'api/form/data/add',
    data: {
      data: data
    }
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}

export function findFormData(id, callback){
  axios.get('api/form/data/find', {
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
/**
 * models
 */
export function findModels(callback){
  axios.get('api/models/find')
  .then(res => {
    callback(res)
  })
  .catch(err => {
    callback(err)
  })
}

export function findModelById(id, callback){
  axios.get('api/models/find/id',{
    params:{
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