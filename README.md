# Simple React SSR Demo

A simple React SSR demo with github open api to view the open-source license list and details.

## Features

- [x] Router
- [x] Data fetching
- [x] Styles

## Usage

Make sure that you have Node.js v16.20.0 or above installed.

Copy the `/configs/default.json` to `/configs/local.json`, and change the `GITHUB_TOKEN` to your own token.

More information about [github token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

### Development

Open two terminals, and run the following commands:

```bash
npm run dev
```

and

```bash
npm run serve
```

Then open `http://localhost:3000` in your browser.

To see the changes in `src` folder, you need to refresh the browser.

### Build

Run the following commands:

```bash
npm run build
```
