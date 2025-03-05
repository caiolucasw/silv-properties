import { model, models, Schema } from "mongoose";

const optionsSchema = new Schema({
  nightly: {
    price: { type: Number },
  },
  weekly: {
    price: { type: Number },
  },
  monthly: {
    price: { type: Number },
  },
});

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    options: {
      type: optionsSchema,
      required: true,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    amenities: [{ type: String }],
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", PropertySchema);

export default Property;
