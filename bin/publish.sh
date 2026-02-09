#!/bin/bash
set -e

# Build and test first, before bumping version
echo "Building..."
bun run build

echo "Testing..."
bun test --timeout 30000 src/

# Only bump version after build+test pass
echo "Bumping version..."
npm version patch --no-git-tag-version
VERSION=$(node -p "require('./package.json').version")
echo "Version: $VERSION"

# Publish (npm will prompt for OTP if needed)
echo "Publishing..."
npm publish

echo "Published postwind@$VERSION"
