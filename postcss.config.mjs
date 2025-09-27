// PostCSS config for Tailwind CSS v4
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}
    // autoprefixer: {} // Optional: include if you need broader vendor prefixing
  }
};

export default config;