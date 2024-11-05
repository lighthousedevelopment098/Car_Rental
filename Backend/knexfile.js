import dotenv from 'dotenv'

dotenv.config()

const connection = {
   host: process.env.POSTGRES_HOST,
   user: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DATABASE,
}

const commonConfig = {
   client: 'pg',
   connection : process.env.POSTGRES_URL,
   pool: { min: 2, max: 10 },
   migrations: {
      directory: './migrations',
   },
   seeds: {
      directory: './seeds',
   },
}

export default {
   development: commonConfig,
   production: commonConfig,
}