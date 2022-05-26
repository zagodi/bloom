const tsconfig = require(`./tsconfig`);

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: `.`,
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  'import/prefer-default-export': `off`,
  'import/extensions': [
    `error`,
    `ignorePackages`,
    {
      ts: `never`,
      tsx: `never`,
      js: `never`,
      jsx: `never`,
    },
  ],
  'import/order': [
    `error`,
    {
      groups: [[`builtin`, `external`], `internal`, [`sibling`, `index`]],
      pathGroups: [
        {
          pattern: `react`,
          group: `external`,
          position: `before`,
        },
        ...Object.keys(tsconfig.compilerOptions.paths).map((key) => ({
          pattern: `${key}*`,
          group: `internal`,
          position: `after`,
        })),
      ],
      pathGroupsExcludedImportTypes: [],
      'newlines-between': `always`,
      alphabetize: {
        order: `asc`,
        caseInsensitive: true,
      },
    },
  ],
};
