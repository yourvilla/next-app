import mongoose from "mongoose";

const { user, password } = process.env;
const connectionUrl = `mongodb+srv://${user}:${password}@cluster0.zuhacgh.mongodb.net/businessDB`;
console.log(password,user,"Connnection");

await mongoose.connect(connectionUrl);

export default mongoose;
