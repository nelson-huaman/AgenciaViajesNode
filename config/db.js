import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
   define: {
      timestamps: false
   },
   pool: {
      max: 5,
      min: 0,
      acqueri: 30000,
      idle: 10000
   },
   operatorAliasses: false

});

export default db;