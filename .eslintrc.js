module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  "rules": {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        }
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "camelcase": "error",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-restricted-imports": [
      "error",
      "rxjs/Rx"
    ],
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "radix": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "never"],

    "import/order": ["error", {
      "groups": [["builtin", "external", "internal"]],
      "newlines-between": "never",
      "pathGroups": [
        {"pattern": "./*.scss", "group": "sibling", "position": "after"},
        {"pattern": "@pages", "group": "internal", "position": "after"},
        {"pattern": "@core/**", "group": "internal", "position": "after"},
        {"pattern": "@app/**", "group": "internal", "position": "after"},
        {"pattern": "@configs/**", "group": "internal", "position": "after"},
        {"pattern": "@types-internal/**", "group": "internal", "position": "after"}
      ]
    }],
    "import/no-default-export": "error",
    "import/no-internal-modules": ["error", {
      "allow": [
        "@core/ui-kit/*",
        "@core/services/*",
        "@core/common/*",
        "@core/lib/*",
        "@configs/design/*",
        "__mocks__/*",
        "@angular/**",
        "zone.js/**"
      ]
    }]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": {
          "resolve": {
            "modules": ["src", "node_modules"],
            "extensions": [".js", ".ts", ".tsx", ".json"]
          }
        }
      }
    }
  }
};
