# npx generate-tailwindcss-safelist

A tool to scan a project for Tailwind CSS classnames and generate a JSON safelist file. This is particularly useful when creating a UI library where you want to export a list of all used Tailwind classes. Consumers of your library can then import this safelist in their `tailwind.config.js` to ensure these classes are included in the final CSS output.

## Badges

![npm](https://img.shields.io/npm/v/generate-tailwindcss-safelist) ![npm](https://img.shields.io/npm/dt/generate-tailwindcss-safelist)


## Usage

To generate a safelist of Tailwind classnames used in your project, run:

```bash
npx generate-tailwindcss-safelist -i <path-to-input-css> -o <path-to-output-json>
```

## Parameters

- `-i` (required): The location of the CSS file Tailwind should process, containing your `@tailwind` directives.
- `-o` (required): Output location for the generated JSON safelist file.

## Examples

### Basic Usage

```bash
npx generate-tailwindcss-safelist -i ./src/styles.css -o safelist.json
```

### For package creators

```js
// src/index.js
export function Title({ children }) {
  return <h2 className="text-lg font-bold text-gray-800">{children}</h2>;
}
```

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```sh
# generate safelist.json
npx generate-tailwindcss-safelist -i ./src/styles.css -o ./safelist.json
```

```javascript
// safelist.json
["text-lg", "font-bold", "text-gray-800"]
```

### For package consumers

```js
// tailwind.config.js
import safelist from "<package-name>/safelist.json";

const config = {
  safelist: safelist,
  // ... other configs
};

export default config;
```

## License

[MIT License](LICENSE)
