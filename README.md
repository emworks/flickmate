# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to deploy demo

1. Configure the deployment from the branch `demo` via [GitHub Pages](https://docs.github.com/en/pages/quickstart)

2. Build in the feature branch
```
git checkout feature/abc
```
For `parcel`:
```
npm run build -- --public-url ./
```
For `vite`:
```
npm run build -- --base /flickmate/feature/abc/
```
3. Update the `demo` branch
```
git checkout demo
mkdir -p ./feature/abc
cp -r ./dist/* ./feature/abc
git add .
git commit -m "deploy feature/abc"
git push
```

4. Go to https://emworks.github.io/flickmate/feature/abc