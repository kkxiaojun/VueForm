const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId
const form = require('../models/form')
const formData = require('../models/form_data')
const models = require('../models/models')

router.get('/form/find', (req, res) => {
  form.find({})
    .then(form => {
      res.json(form)
    })
    .catch(err => {
      res.json(err)
    })
})

router.post('/form/data/add', (req, res) => {
  let data = req.body.data;
  let params = {
    id: ObjectId(data.id),
    title: data.title,
    time: data.time,
    form: data.form,
  }
  formData.create(params)
    .then(form => {
      res.json(form)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/form/data/find', (req, res) => {
  formData.find({ id: req.query.id })
    .then(form => {
      res.json(form)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/form/id', (req, res) => {
  form.findOne({ _id: ObjectId(req.query.id) })
    .then(form => {
      res.json(form)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/form/delete', (req, res) => {
  form.remove({ _id: ObjectId(req.query.id) })
    .then(form => {
      res.json(form)
    })
    .catch(err => {
      res.json(err)
    })
})

router.post('/form/add', (req, res) => {
  if (req.body.from == 'new' || req.body.from == 'model') {
    let params1 = {
      title: req.body.title,
      form: req.body.form
    }
    form.create(params1)
      .then(form => {
        res.json(form)
      })
      .catch(err => {
        res.json(err)
      })
  } else {
    let condition = { _id: ObjectId(req.body.id) };
    let params = {
      title: req.body.title,
      form: req.body.form
    }
    form.update(condition, params)
      .then(form => {
        res.json(form)
      })
      .catch(err => {
        res.json(err)
      })
  }
})
/******************************************
 模板接口
 ******************************************/
router.get('/models/find', (req, res) => {
  models.find()
    .then(model => {
      res.json(model)
    })
    .catch(err => {
      res.json(err);
    })
})

router.get('/models/find/id', (req, res)=>{
  models.find({_id:ObjectId(req.query.id)})
  .then(model=>{
    res.json(model);
  })
  .catch(err=>{
    res.json(err);
  })
})

module.exports = router