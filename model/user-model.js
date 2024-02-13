import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const userDetails = sequelize.define("userDetails", {
  // Model attributes are defined here
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// console.log(Movie === sequelize.models.Movie);
export { userDetails };
