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

Given an input CSS file, `src/styles.css`:

```css
@tailwind components;
@tailwind utilities;
```

This will generate `safelist.json`:

```json
["sr-only", "fixed", "absolute", "relative", "flex", "max-h-[300px]"]
```

### Example for End Users

For users of your package, here’s how they can import the generated safelist in their Tailwind configuration:

```javascript
// tailwind.config.js
import twSafelist from '<package-name>/safelist.json';

const config = {
  safelist: twSafelist,
  // ...rest of the Tailwind config
};

export default config;
```

## License

[MIT License](LICENSE)