<p>
  Electron React Boilerplate uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, NodeJS, Webpack and Bootstrap.
</p>


## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/eli-global-ph/electron-react-boilerplate.git your-project-name
cd your-project-name
yarn install
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## Starting Development

Start the app in the `dev` environment:

```bash
yarn electron:serve
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn electron:build
```

## Building in macOS Monterey

Run the project with the command:

	$ PYTHON_PATH=$(which python) npm run electron:build