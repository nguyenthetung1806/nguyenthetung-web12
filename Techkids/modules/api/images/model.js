const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// child doc
const CommentSchema = new Schema ({
  content: { type: String, default: "" },
  createdBy: { type: String, default: null }
}, {
  timmestamps: { createAt: "createAt" }
});

// parent doc
const ImageModel = new Schema ({
  imageUrl: { type: String, required: true },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  createdBy: { type: String, default: null },
  view: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  Active: { type: Boolean, default: true },
  comment: { type: [CommentSchema], default: [] },
}, {
  timmestamps: { createAt: "createAt" }
});

module.exports = mongoose.model("Images", ImageModel);
