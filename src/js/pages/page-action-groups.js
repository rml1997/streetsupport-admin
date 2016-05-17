var FastClick = require('fastclick')
var nav = require('./../nav.js')

nav.init()
FastClick.attach(document.body)

require.ensure(['knockout', '../models/action-groups/ListActionGroups'], (require) => {
  var ko = require('knockout')
  var Model = require('../models/action-groups/ListActionGroups')

  ko.applyBindings(new Model())
})
