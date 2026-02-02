#!/bin/bash

sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

sudo docker pull node:18-alpine

sudo docker run -d \
  --name node-api \
  -p 3000:3000 \
  samyak2605/docker-node-api
