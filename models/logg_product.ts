import mongoose, { Schema } from "mongoose"

const LoggProductSchema: Schema = new Schema({
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
}, { collection: 'logg_hardstore_products' })

const Logg_product = mongoose.models.Logg_product || mongoose.model("Logg_product", LoggProductSchema)

export default Logg_product