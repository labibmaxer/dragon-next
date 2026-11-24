import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4'])
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("dragon-news");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 
});
// 9cnOLXUzvS6WBx61
// labib00060_db_user