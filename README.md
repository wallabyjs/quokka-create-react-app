## Quokka Create-React-App Sample

This example project shows Quokka configured for an create-react-app created
using v3.0.1 with all defaults.

## Try Quokka on this project

To try Quokka with this project, you'll need to clone this repo and run
`yarn install`. After installing the packages, you're ready to go.

1. Open up `src/QuokkaExample.js`.
2. Start Quokka
3. In the example, you will see that we import `src/App.js` and load it into
the browser DOM. We then access the component from the DOM by its class name
and are outputting its innerHTML, which displays both inline in your editor
and within the Quokka console.

## How did we configure Quokka for this project?

Because create-react-app has a few runtime dependencies, we needed to specify
some additional Quokka configuration to run project files:

1. Install `jsdom-quokka-plugin` package to provide browser-like environment.
2. Install `@babel/register` package to allow Quokka to run babel on imports.

```
yarn add jsdom-quokka-plugin @babel/register --dev
```

3. Add a `.quokka` project file that tells Quokka to use the 
`jsdom-quokka-plugin` and to transpile your files using the `react-app` babel
preset.

*Please note:* you may install the `jsdom-quokka-plugin` and `@babel/register`
packages to your [global quokka folder](https://quokkajs.com/docs/configuration.html#global-config-file)
if you don't want to pollute your project's node modules. If you install
globally, you will not need to add them again for subsequent projects. 

To install the packages in your global quokka folder:

```
cd ~/.quokka
npm install jsdom-quokka-plugin
```