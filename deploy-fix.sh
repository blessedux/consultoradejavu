#!/bin/bash

# This script attempts multiple deployment strategies to fix the 404 issue

echo "==========================================="
echo "Consultora Dejavu - Deployment Fix Utility"
echo "==========================================="

# Strategy 1: Static Export
echo "Strategy 1: Creating a static export"
npm run export || next build && next export -o out

# Strategy 2: Create fallback index.html
echo "Strategy 2: Creating fallback index.html files"
cp public/static-app/index.html out/index.html
cp public/static-app/index.html out/404.html

# Strategy 3: Copy static files to root
echo "Strategy 3: Ensuring static files are available"
mkdir -p out/static-app
cp -r public/static-app/* out/static-app/

# Strategy 4: Generate deployment configurations
echo "Strategy 4: Generating deployment configurations"
cp vercel-static.json out/vercel.json
echo '{"version":2,"public":true}' > out/.vercelignore

echo "==========================================="
echo "Deployment fix completed"
echo "Please use the 'out' directory for static deployment"
echo "===========================================" 