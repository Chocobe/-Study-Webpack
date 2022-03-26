module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true,
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "plugins": [
    "prettier",
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },

  "ignorePatterns": [".eslintrc.js"],
};
