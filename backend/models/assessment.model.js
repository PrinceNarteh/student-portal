const { Schema, model } = require("mongoose");

const assessmentSchema = new Schema({
  term: {
    type: String,
    enum: ["first", "second", "third"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});
