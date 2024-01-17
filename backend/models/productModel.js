import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: moongoose.Schema.Types.ObjectId,
      reqierd: true,
      ref: "User",
    },
    name: {
      type: String,
      requierd: true,
    },
    rating: {
      type: Number,
      requierd: true,
    },
    comment: {
      type: String,
      requierd: true,
    },
  },
  {
    timestamps: true,
  }
);

const prodctSchema = new mongoose.Schema(
  {
    user: {
      type: moongoose.Schema.Types.ObjectId,
      reqierd: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requierd: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      requierd: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", prodctSchema);

export default Product;
