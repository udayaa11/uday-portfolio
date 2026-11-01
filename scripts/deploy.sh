#!/usr/bin/env bash
# Builds the site and publishes it to GitHub Pages (gh-pages branch).
# Live at https://udayaa11.github.io/uday-portfolio/
set -euo pipefail
cd "$(dirname "$0")/.."

NUXT_APP_BASE_URL=/uday-portfolio/ npx nuxt generate
touch .output/public/.nojekyll   # let GitHub serve the _nuxt/ folder

REMOTE=$(git remote get-url origin)
cd .output/public
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push -f "$REMOTE" gh-pages
rm -rf .git
echo "Deployed → https://udayaa11.github.io/uday-portfolio/"
