const productModel = require("./models/product.model.js");

module.exports = {
  getProducts: async (opt = null, lim = null) => {
    try {
      const products = await productModel.find(opt).limit(lim);

      if (!products) {
        throw new Error("Products not found");
      }

      return products;
    } catch (err) {
      console.log(err);
    }
  },
  getProductById: async (pid) => {
    try {
      const product = await productModel.findById(pid);

      if (!product) {
        throw new Error("Product not found");
      }

      return product;
    } catch (err) {
      console.log(err);
    }
  },
  addProduct: async (body) => {
    try {
      await productModel.create(body);

      return true;
    } catch (err) {
      console.log("An error has occurred: ", err);
    }
  },
  updateProduct: async (pid, body) => {
    try {
      await productModel.updateOne({ _id: pid }, body);

      return true;
    } catch (err) {
      console.log("An error has occurred: ", err);
    }
  },
  deleteProduct: async (pid) => {
    try {
      await productModel.deleteOne({ _id: pid });

      return true;
    } catch (err) {
      console.log("An error has occurred: ", err);
    }
  },
};
