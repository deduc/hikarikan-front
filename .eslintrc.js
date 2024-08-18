module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // Asegura que ESLint use 4 espacios para la indentación
        "indent": ["error", 4],
        // Asegura que Prettier use 4 espacios
        "prettier/prettier": ["error", { "tabWidth": 4 }],
    },
};
