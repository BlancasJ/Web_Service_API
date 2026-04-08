# Web_Service_API

RESTful CRUD API for a notes/post-it app built with Express and MySQL, deployed via AWS CodeDeploy.

## Context
- **Course:** Ksquare University Bootcamp
- **Date:** 2021

## Tech Stack
- Node.js, Express.js
- MySQL
- Body-parser
- AWS CodeDeploy (appspec.yml + PM2)

## What It Does
Provides a REST API at `/api/postIt` with full CRUD endpoints: create, read all, read one, update, and delete post-it notes. Connects to a MySQL database for persistence. Configured for AWS deployment with CodeDeploy scripts and PM2 process management. Serves as the backend for the notes-site frontend.
