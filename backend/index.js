const express = require('express');
const app= express();

const PORT=5000;

app.connect(PORT,()=>{console.log("SUCCESSFULLY CONNECETD TO PORT 5000")});