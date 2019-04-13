Very Basic Reason React Setup
=============================

## How it Works

Use the vscode plugin named [`reason-vscode`](https://github.com/jaredly/reason-language-server) by Jared Forsyth.

The language server launched by `reason-vscode` does the compiling. `bsb -make-world` `bsb -make-world -w` are generally not needed because the vscode plugin's language server is doing this when we save `.re` files

Parcel is unaware of ReasonML in the current setup. `bsb` (running from `vscode`) takes care of compiling down to JavaScript, then Parcel takes it from there. Parcel is watching the `.bs.js` files through the imports that lead up to `index.html`. When `bsb` detects changes to `.re` files, hot compiles, then Parcel detects the changes in the `.bs.js` files and hot packages them with a reload in the server. (Parcel is providing the dev server)

## How Testing Works

TODO - figure how testing works

## Real World Example

Learn [this](https://github.com/jihchi/reason-react-realworld-example-app)

## Build Notes

The build is currently working locally with
Node v10.5.3, using nvm

```
which node
/Users/mjb/.nvm/versions/node/v10.15.3/bin/node
```

These are the global installs:

```
npm list --global --depth=0
/Users/mjb/.nvm/versions/node/v10.15.3/lib
├── npm@6.4.1
└── yarn@1.13.0
```