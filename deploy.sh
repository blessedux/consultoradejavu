#!/bin/bash

# Clean up old build files if they exist
if [ -d ".next" ]; then
  echo "Removing old .next directory..."
  rm -rf .next
fi

if [ -d "out" ]; then
  echo "Removing old out directory..."
  rm -rf out
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
npx vercel --prod

echo "Deployment complete!" 