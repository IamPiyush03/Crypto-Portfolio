module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2', // Ensure this matches your React version in package.json
    },
  },
  plugins: [
    'react', // Ensure 'react' plugin is included if using React rules
    // 'react-refresh' // Uncomment this if 'eslint-plugin-react-refresh' is installed and needed
  ],
  rules: {
    'react/jsx-no-target-blank': 'off', // Example of overriding a rule
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Add more rules as needed
  },
};
