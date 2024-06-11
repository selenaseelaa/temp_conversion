#!/bin/bash

# Set environment variables
REGISTRY_URL="my-registry"
IMAGE_NAME="staging/myapp"
TAG="latest"

# Log in to Docker registry
docker login $REGISTRY_URL

# Create and use a new Buildx builder instance
docker buildx create --use

# Build the multi-platform image
docker buildx build --platform linux/amd64,linux/arm64 -t myapp .

# Tag the image
docker tag myapp $REGISTRY_URL/$IMAGE_NAME:$TAG

# Push the image to the registry
docker push $REGISTRY_URL/$IMAGE_NAME:$TAG

echo "Build and push completed successfully!"