import { publicProcedure, router } from "@/server/trpc";

export const test = router({
  getTest: publicProcedure.query(async () => ({
    return: "Hello World from test router",
  })),
});
