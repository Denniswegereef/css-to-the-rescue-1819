#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.denniswegereef.nl' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://denniswegereef.github.io
# git push -f git@github.com:denniswegereef/denniswegereef.github.io.git master

# if you are deploying to https://denniswegereef.github.io/year-two-assesment
git push -f git@github.com:denniswegereef/css-to-the-rescue-1819.git master:gh-pages

cd -
