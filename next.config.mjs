import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
