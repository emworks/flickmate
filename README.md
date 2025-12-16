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
npm run build -- --base /flickmate/feature/abc
cp ./dist/index.html ./dist/404.html
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