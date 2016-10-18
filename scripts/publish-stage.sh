#!/usr/bin/env bash
BUCKET=stage-frontend.lightpace.com
DIR=dist/stage/
aws  s3  sync $DIR s3://$BUCKET/ --region us-west-2
