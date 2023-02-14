const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders) return res.status(404).send("Orders not found");
    res.status(201).send(orders);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send("Orders not found");
    res.status(201).send(order);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.create = async (req, res) => {
  const order = new Order(req.body);

  try {
    const newOrder = await order.save();
    res.status(201).send(newOrder);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.body, { new: true });

  if (order == null) return res.status(404).send("Order with Id not found!");

  try {
    const updateOrder = await order.save();
    res.status(201).send(updateOrder);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deleteOrder) return res.status(404).send("Order with Id not found!");

    res.status(201).send("Order deleted successfully!");
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};
