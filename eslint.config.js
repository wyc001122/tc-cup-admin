import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    ignores: [
      'public/**/*',
      'dist*',
      'Dockerfile',
    ],
  },
  {
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      }],
      'no-console': 'off',
      'no-debugger': 'off',
      'no-empty': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'vue/no-unused-refs': 'off',
      'vue/no-unused-properties': 'off',
      'vue/no-unused-vars': 'off',
      'import/order': 'off',
      'no-lone-blocks': 'off',
      'no-useless-catch': 'off',
      'prefer-exponentiation-operator': 'off',
      'prefer-promise-reject-errors': 'off',
      'sort-imports': 'off',
      'vue/custom-event-name-casing': 'off',
      'ts/no-use-before-define': 'off',
      'no-use-before-define': 'off',
      'no-with': 'off',
      'unused-imports/no-unused-vars': 'off',
      'curly': ['error', 'all'],
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      'vue/block-order': ['error', {
        order: ['route', 'i18n', 'script', 'template', 'style'],
      }],
    },
  },
)
