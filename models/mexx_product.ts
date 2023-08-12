import mongoose, { Schema } from "mongoose"

const MexxProductSchema: Schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
    image: String,
    title: String,
    category: String,
    price: String,
    stock: String,
    date: String,
    dolar_oficial: String,
    oficial_price: mongoose.Schema.Types.Decimal128,
    dolar_blue: String,
    blue_price: mongoose.Schema.Types.Decimal128
}, { collection: 'mexx_products' })

const Mexx_product = mongoose.models.Mexx_product || mongoose.model("Mexx_product", MexxProductSchema)

export default Mexx_product