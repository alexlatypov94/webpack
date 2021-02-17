module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    //   jest: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    ignorePatterns: ["*.js"],
    plugins: ["no-null", "react", "@typescript-eslint", "prettier"],
    settings: {
      react: {
        pragma: "React",
        version: "detect"
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            constructors: "no-public"
          }
        }
      ],
      "@typescript-eslint/explicit-module-boundary-types": ["error", { allowArgumentsExplicitlyTypedAsAny: true }],
      "@typescript-eslint/func-call-spacing": ["error", "never"],
      "@typescript-eslint/keyword-spacing": ["error", { after: true, before: true }],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "private-field",
            "protected-field",
            "public-field",
            "public-method",
            "protected-method",
            "private-method"
          ]
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"]
        },
        {
          selector: "enumMember",
          format: ["PascalCase", "camelCase"]
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"]
        },
        {
          selector: "typeLike",
          format: ["PascalCase"]
        },
        {
          selector: "property",
          format: ["camelCase"]
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow"
        }
      ],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["off"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/quotes": [
        "error",
        "double",
        {
          avoidEscape: true
        }
      ],
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/typedef": [
        "error",
        {
          arrowParameter: false,
          memberVariableDeclaration: true,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
          variableDeclarationIgnoreFunction: true
        }
      ],
      "comma-dangle": "error",
      curly: "error",
      "default-case": "error",
      "dot-notation": "error",
      "eol-last": "error",
      eqeqeq: ["error", "always"],
      "guard-for-in": "error",
      "id-denylist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined"],
      "id-match": "error",
      "max-len": ["error", { code: 140 }],
      "no-bitwise": "error",
      "no-caller": "error",
      "no-console": "error",
      "no-eval": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "no-new-wrappers": "error",
      "no-null/no-null": "error",
      "no-restricted-imports": ["error", { paths: ["lodash"] }],
      "no-trailing-spaces": ["error"],
      "no-underscore-dangle": "error",
      "no-unused-expressions": "error",
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "always", { objectsInObjects: false }],
      "prefer-const": "warn",
      radix: "error",
      "spaced-comment": ["error", "always"],
      "react/prop-types": "off",
      "react/jsx-key": "off",
      "react/display-name": "off"
    }
  };
