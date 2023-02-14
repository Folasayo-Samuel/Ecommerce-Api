const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(201).send(categories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) return res.status(404).send("Cannot find category");
    res.status(201).send(category);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.createNewCategory = async (req, res) => {
  const category = new Category(req.body);

  try {
    const newCategory = await category.save();
    res.status(201).send(newCategory);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.body, { new: true });
  if (!category) return res.status(404).send("Cannot find Category");
  try {
    const updatedCategory = await category.save();
    res.status(201).send(updatedCategory);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) return res.status(404).send("Category doesn't exist!");

  try {
    res.status(201).send({ message: "Category deleted successfully!" });
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};
