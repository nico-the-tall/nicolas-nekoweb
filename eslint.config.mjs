import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler";

export default defineConfig(
  globalIgnores(["dist"]),
  eslint.configs.recommended,
  reactCompiler.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended(),
);
