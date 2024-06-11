#!/bin/bash

# Pull the latest image
docker-compose pull

# Stop the current container
docker-compose down

# Start the new container
docker-compose up -d
