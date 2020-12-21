if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
}

//Contiene las variables de entorno .env