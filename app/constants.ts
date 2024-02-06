export const env =
  (process.env.NEXT_PUBLIC_NODE_ENV as
    | "development"
    | "preview"
    | "production") || "development";
