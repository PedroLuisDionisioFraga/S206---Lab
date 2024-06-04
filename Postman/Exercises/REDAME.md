# Postman Exercises

## Introduction
This repository contains a collection of exercises to help you learn how to use Postman. The exercises are designed to be completed in order, with each exercise building on the previous one.

## Run in Postman
To run the exercises in Postman, you can import the collection file `Postman Exercises.postman_collection.json` into Postman.

## Generate Final Report Using `newman`
To generate a final report using `newman`, you can run the following command:

Install `newman` globally:
```bash
npm install -g newman
```

Run the collection using `newman`:
```bash
newman run exercises.postman_collection.json -r htmlextra
```

This will run the collection in the command line and generate an HTML report in the file `newman-report.html`.