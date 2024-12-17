const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const cookieParser = require ('cookie-parser');
const { json } = express;
const app = express();

function corMw(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Cho phép tất cả các nguồn
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Cho phép gửi cookie
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // Xử lý nhanh cho preflight request
  }
  next();
}
app.use(corMw);
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.set('trust proxy', 1);
app.use(cookieParser());

app.use("/user", proxy("https://animetangouserservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/anime", proxy("https://animetangoanimeservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/useranime", proxy("https://animetangouseranimeservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/admin", proxy("https://animetangoadminservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/knn", proxy("https://animetangoknnservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/decisiontree", proxy("https://animetangodecisiontreeservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));
app.use("/naivebayes", proxy("https://animetangonaivebayesservice.onrender.com", {
  proxyReqPathResolver: (req) => {
    // Giữ nguyên "/admin" trong URL đích
    return req.originalUrl; // Đây là URL yêu cầu ban đầu, bao gồm cả /admin
  }
}));


const PORT = 3004;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
