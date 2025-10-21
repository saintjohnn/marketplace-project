import js from "@eslint/js"
import eslintPluginPrettier from "eslint-plugin-prettier"
import eslintPluginTS from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTS
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: false,
          trailingComma: "none",
          printWidth: 80
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" }
      ],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-empty-function": "error",
      "no-multi-spaces": "error",
      "no-implicit-coercion": "warn",
      "no-return-await": "error",
      "no-useless-return": "error",
      "no-redeclare": "error",
      "prefer-template": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "no-nested-ternary": "warn",
      "max-lines-per-function": ["warn", 80],
      "max-depth": ["warn", 4],
      "keyword-spacing": ["error", { before: true, after: true }],
      "spaced-comment": ["warn", "always", { markers: ["/"] }]
    }
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      "node_modules/**",
      ".husky/**",
      ".gitignore"
    ]
  }
]
