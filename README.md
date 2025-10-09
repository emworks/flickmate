## How to deploy demo

1. Configure the deployment from the branch `demo` via [GitHub Pages](https://docs.github.com/en/pages/quickstart)

2. Build in the feature branch and update the `demo` branch
```
git checkout feature/abc
npm run build
git checkout demo
cp -r ./dist/* ./feature/abc
git add .
git commit -m "deploy feature/abc"
git push origin demo --force
```

3. Go to https://emworks.github.io/flickmate/feature/abc