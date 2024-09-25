const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const sequelize = require("./config/connection"); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
console.log(typeof process.env.DB_PASSWORD); // Should output 'string'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
