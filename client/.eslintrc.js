module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'linebreak-style': 0,
    'no-alert': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'prefer-template': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline',
        functions: 'never',
      },
    ],
    'object-curly-newline': 'off',
    'no-unneeded-ternary': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': [0],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
