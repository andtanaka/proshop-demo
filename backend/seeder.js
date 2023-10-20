import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import products from './data/products.js';
import users from './data/users.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    //deleta tudo do banco de dados:
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //Cria os users
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id; //em './data/users' o primeiro user é admin

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; //adiciona o campo user
    });

    await Product.insertMany(sampleProducts);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (e) {
    console.log(`${e}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //deleta tudo do banco de dados:
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (e) {
    console.log(`${e}`.red.inverse);
    process.exit(1);
  }
};

//process.argv: retorna array com os argumentos passados

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
