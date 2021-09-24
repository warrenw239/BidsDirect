module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'implicit-arrow-linebreak': ['error', 'beside'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['single', 'none', 'all', 'multiple'],
                allowSeparatedGroups: true,
            },
        ],
    },
};
