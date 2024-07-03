#!/bin/sh
yarn run prisma generate
yarn run prisma db push
yarn dev