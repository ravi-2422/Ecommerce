import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
        //strictQuery: true,
    })
    .then((data) => {
      console.log("Mongodb connected with server online server");
    });
};

export default connectDB;