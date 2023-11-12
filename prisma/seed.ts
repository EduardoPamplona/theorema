import bcrypt from "bcrypt";
import { prisma } from "../src/lib/prisma";
import { users } from "./seedData";

async function seedUsers() {
  const seed = users.map(async (u) => {
    const passwordHash = await bcrypt.hash(u.password, 10);
    const user = await prisma.user.create({
      data: {
        email: u.email,
        password: passwordHash,
        name: u.name,
      },
    });
    if (u.role == "PROFESSOR") {
      await prisma.professor.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    } else if (u.role == "STUDENT") {
      await prisma.student.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    } else {
    }
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
