#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Building Next.js application..."
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful! The app should now deploy correctly on Vercel."
  echo "Check if the .next/routes-manifest.json file was created:"
  ls -la .next/
else
  echo "Build failed. Please check the error messages above."
fi 