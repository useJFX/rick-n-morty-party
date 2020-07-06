module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    rules: {
        "react/jsx-max-props-per-line": [1, { "when": "multiline" }],
        "react/jsx-sort-props": [1, {
            "shorthandLast": true,
        }],
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                "react/prop-types": "off",
            },
        }
    ],
};