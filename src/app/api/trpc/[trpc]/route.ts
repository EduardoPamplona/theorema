import { appRouter } from "@/server/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { env } from "process";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    // TODO: learn about why the requests to {host}/api/trpc/{router}.{procedure} are made with encoded query parameters like "api/trpc/exercise.getExerciseById?batch=1&input=%7B%220%22%3A%7B%22id%22%3A%221%22%7D%7D"
    router: appRouter,
    req,
    createContext: () => ({}),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${path}: ${error}`);
          }
        : undefined,
  });

export { handler as GET, handler as POST };
