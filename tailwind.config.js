// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{html,ts}', './libs/ui/**/*.{html,ts}'],
//   theme: {
//     extend: {}
//   },
//   plugins: []
// };
/** @type {import('tailwindcss').Config} */
const hlmTailwindPreset = require('@spartan-ng/ui-core/hlm-tailwind-preset');

module.exports = {
  presets: [hlmTailwindPreset],
  content: ['./src/**/*.{html,ts,scss}', './libs/ui/**/*.{html,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
