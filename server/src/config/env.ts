import dotenv from 'dotenv'
dotenv.config()


const requiredEnv = [
    'COGNODB_URI',
    'COGNODB_USERNAME',
    'COGNODB_PASSWORD'
] as const

for(const key of requiredEnv){
   if(!process.env[key]){
      throw new Error(`Missing required environment variable: ${key}`)
   }
}

export const env = {
  port: Number(process.env.PORT) || 5000,
  cognodbUri: process.env.COGNODB_URI!,
  cognodbUsername: process.env.COGNODB_USERNAME!,
  cognodbPassword: process.env.COGNODB_PASSWORD!,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
}