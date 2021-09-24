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
                ignoreDeclarationSort: false,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
                allowSeparatedGroups: true,
            },
        ],
    },
};
