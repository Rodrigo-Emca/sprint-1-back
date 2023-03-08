import mongoose from "mongoose";

// aqui me traigo la uri de la base de datos
const DB_URI = process.env.MONGO;

// Aquí me conecto a la base de datos
mongoose.set('strictQuery', false);
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});

export default mongoose.connection;

