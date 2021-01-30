// import sample data
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import users from './data/users.js';
import products from './data/products.js';
import Order from './models/orderModel.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // delete all
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // connect admin with products
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);

    console.log('Data imported'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // delete all
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
