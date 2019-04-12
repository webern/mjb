# Basic Reason Template

Some notes on how this works.

Use the vscode plugin named [`reason-vscode`](https://github.com/jaredly/reason-language-server) by Jared Forsyth.

The language server launched by `reason-vscode` does the compiling. `bsb -make-world` `bsb -make-world -w` are generally not needed because the vscode plugin's language server is doing this when we save `.re` files

# Build
```
npm run build
```

# Build + Watch

```
npm run start
```


# Editor
If you use `vscode`, Press `Windows + Shift + B` it will build automatically
