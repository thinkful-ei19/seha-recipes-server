'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const recipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
  author: { type: String, required: true },
  type: { type: String },
  ethnicity: { type: String },
  servings: { type: Number },
  ingredients: [{type:String}],
  directions: { type: String, required: true },
  downloadUrl: { type: String }
});

recipeSchema.methods.apiRepr = function () {
  return {
    id: this._id
  };
};
recipeSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});


module.exports  = mongoose.model('Recipe', recipeSchema);


