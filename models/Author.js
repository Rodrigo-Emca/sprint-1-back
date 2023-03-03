import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    //createdBy: {
      //type: mongoose.Schema.Types.ObjectId,
    //  required: true,
      //ref: 'User',
 //   },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model('Author', authorSchema);

export default Author;
