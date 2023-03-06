import mongoose from "mongoose";

// Definir la URL de conexión a la base de datos
const DB_URI = process.env.MONGO;

// Conexión a la base de datos
mongoose.set('strictQuery', false);
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});

// Exportar la conexión a la base de datos
export default mongoose.connection;
