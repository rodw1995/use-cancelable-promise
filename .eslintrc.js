module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
  },
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts", ".tsx"],
      }
    },
  },
  "rules": {
    "max-len": ["error", { code: 120 }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxBOF": 0,
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
        "tsx": "never",
      }
    ],
    "import/order": ["error", {
      "alphabetize": {
        "order": "asc",
      },
      "newlines-between": "never",
    }],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, consistent: true },
      "ObjectPattern": { "multiline": true, consistent: true },
      "ImportDeclaration": { "multiline": true, consistent: true },
      "ExportDeclaration": { "multiline": true, consistent: true }
    }],
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": ["error", { "custom": "ignore" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
