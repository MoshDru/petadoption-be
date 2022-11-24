import mongoose from 'mongoose';

const petSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true }, //breed
        category: { type: String, required: true }, //type
        description: { type: String, required: true }, //bio
        price: { type: Number, required: true },
        countInShelter: { type: Number, required: true },
        rating: { type: Number, required: true },
        // numReviews: { type: Number, required: true },
        // type: { type: String, required: true },
        // adoptionStatus: { type: String, required: true },
        // height: { type: Number, required: true },
        // weight: { type: Number, required: true },
        // hypoallergenic: { type: Boolean, required: true },
        // dietaryRestrictions: { type: Number, required: true },
        // breed: { type: String, required: true },
    },
    { 
        timestamps: true,
    }
);
const Pet = mongoose.models.Pet || mongoose.model('Pet', petSchema);

export default Pet;
