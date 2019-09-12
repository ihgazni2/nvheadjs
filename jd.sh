git rm -r docs
jsdoc nvhead.js -d docs
webpack
node TOOLS/npmver.js
git add .
git commit -m "docs"
npm publish
