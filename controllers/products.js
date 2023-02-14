const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send(products);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Cannot find product!");
    res.status(201).send(product);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.create = async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    res.status(201).send(newProduct);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.body, { new: true });
  if (!product) return res.status(404).send("Product not found!");

  try {
    const updateProduct = await product.save();
    res.status(201).send(updateProduct);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send("Product not found!");

    res.status(201).send("Product deleted successfully!");
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

// The Future of Backend Technology: Discussing the latest advancements and predictions for the future of backend development and how it will impact society.

// The Benefits of a Strong Backend: Exploring the benefits of having a robust backend, such as increased security, scalability, and efficiency.

// The Impact of Backend on E-commerce: Discussing the role of backend technology in powering e-commerce and the future of online shopping.

// Backend for Machine Learning and AI: Examining how backend technology is used to support the development and deployment of machine learning and AI systems.

// The Importance of Performance Optimization: Discussing the importance of optimizing the performance of backend systems and the various techniques and tools used to do so.

// The Role of Backend in Cybersecurity: Exploring the role of backend technology in protecting against cyber threats and ensuring the security of sensitive data.

// Backend for Mobile Applications: Discussing the specific challenges and best practices for building backend systems for mobile applications.

// The Future of Cloud Computing: Examining the role of backend technology in the future of cloud computing and how it will impact businesses and individuals.

// Building Scalable and Resilient Backend Systems: Discussing the design principles and best practices for building scalable and resilient backend systems.

// The Importance of Open Source: Discussing the benefits and importance of open-source technology and how it is driving innovation in the backend development field.
