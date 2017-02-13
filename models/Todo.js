var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: { type: String, default: "text" },
  completed: { type: Boolean, default: false },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);
