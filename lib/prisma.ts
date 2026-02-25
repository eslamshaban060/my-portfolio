// // import { PrismaClient } from "@prisma/client";
// import Prisma from "@prisma/client";

// import { Pool } from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);

// // export const prisma = new PrismaClient({
// //   adapter,
// // });
// export const prisma = new Prisma.PrismaClient({
//   adapter,
// });

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/src/generated/prisma";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
