import { publicProcedure, router } from "@/server/trpc";

import { test } from "@/server/routers/test";

export const appRouter = router({
  // TODO: Add your API procedures here
  test: test,
  getStuff: publicProcedure.query(async () => ({
    return: "Hello World",
  })),
});

export type AppRouter = typeof appRouter;
