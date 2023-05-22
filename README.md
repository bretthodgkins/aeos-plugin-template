# Aeos Plugin Template

This repository provides a template to develop your own plugins for Aeos, an open-source AI automation platform that leverages Large Language Models (LLMs). 

<br>

## Getting Started

Before you start developing a new plugin, it is recommended to familiarise yourself with the architecture and functionality of Aeos. Check out the main Aeos [repository](https://github.com/bhodgk/aeos) for more information.

<br>

### Usage

Clone this repository to start developing your own plugin:

```bash
git clone <this repository>
cd <plugin_directory>
npm install
npm run build
```

You can install this working directory as an Aeos plugin whilst in development:

```bash
aeos install ./build/index.js
```

After that, you can start adding functionality to your plugin.

<br>

## Publishing Your Plugin

Aeos supports the installation of plugins directly from npm, which simplifies the publishing and distribution process. Follow these steps to publish your plugin:

1. Ensure that you have an npm account and that you're logged into npm in your development environment. If you haven't, you can create an account on the [npm website](https://www.npmjs.com/).

2. In your plugin directory, make sure your `package.json` file is properly set up. Particularly, verify that the `name`, `version`, and `main` properties are correctly defined.

3. Once your `package.json` file is ready and your code is finalised, you can publish your plugin to npm using the `npm publish` command:

```bash
npm publish
```

4. After publishing, your plugin will be available in the npm registry and can be installed by anyone using the following Aeos command:

```bash
aeos install <your-package-name>
```

<br>

## Contributing

Contributions are welcome! Please read the main Aeos [CONTRIBUTING.md](https://github.com/bhodgk/aeos/CONTRIBUTING.md) file to understand the process for submitting pull requests to this project.

<br>

## License

This project is licensed under the [MIT License](LICENSE).