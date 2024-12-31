/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'es5',
  tailwindFunctions: ['clsx', 'tw'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  endOfLine: 'lf',
};

export default config;
