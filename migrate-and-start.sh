#!/bin/sh
npx prisma generate
npx prisma db push
npx next build
npx next start