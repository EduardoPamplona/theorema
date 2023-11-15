import bcrypt from "bcrypt";
import { prisma } from "../src/lib/prisma";
import { users } from "./seedData";

async function seedUsers() {
  const seed = users.map(async (u) => {
    const passwordHash = await bcrypt.hash(u.password, 10);
  });
  await Promise.all(seed);

  console.log("Users seeded");
}

async function main() {
  if (process.env.NODE_ENV !== "production") {
    await seedUsers();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
