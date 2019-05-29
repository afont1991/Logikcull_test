const path = require("path");

module.exports = {
  "settings": {
    "react": {
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect",
    },
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "babel",
    "import",
    "react-hooks",
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "react": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "no-debugger": 0,
    "react/display-name": 0,
    "react/no-typos": 1,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.join(__dirname, "webpack.common.js")
      },
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
}