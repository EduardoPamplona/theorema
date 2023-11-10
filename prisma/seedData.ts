export type UserRole = "STUDENT" | "PROFESSOR";

export type MockUser = {
  email: string;
  password: string;
  name: string;
  role: UserRole;
};
export const users: MockUser[] = [
  {
    email: "professor@theorema.io",
    password: "professor123",
    name: "Theorema Professor",
    role: "PROFESSOR",
  },
  {
    email: "student@theorema.io",
    password: "student123",
    name: "Student 01",
    role: "STUDENT",
  },
];
