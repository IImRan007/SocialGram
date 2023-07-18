const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    location: {
      type: String,
    },
    designation: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
