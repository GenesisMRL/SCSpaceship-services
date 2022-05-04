import React from "react";
import products from "./products.json";
import manufacturerIcons from "./manufacturerIcons.json";

export const productsData = {
  getProductsByCategory: (category, sortBy, order) => {
    let filteredProducts = Object.entries(products).filter(([key, value]) => {
      return Object.entries(value.category).some(
        ([key2, value2]) => value2 === category
      );
    });

    if (sortBy === "name") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return -1;
          }
          if (a[1].name > b[1].name) {
            return 1;
          }
          return 0;
        });
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return 1;
          }
          if (a[1].name > b[1].name) {
            return -1;
          }
          return 0;
        });
      }
    } else if (sortBy === "price") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].price - b[1].price
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].price - a[1].price
        );
      }
    } else if (sortBy === "size") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].length - b[1].length
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].length - a[1].length
        );
      }
    }

    return filteredProducts;
  },
  getProductsByTwoCategories: (category, category2, sortBy, order) => {
    let filteredProducts = Object.entries(products).filter(([key, value]) => {
      return (
        Object.entries(value.category).some(
          ([key2, value2]) => value2 === category
        ) &&
        Object.entries(value.category).some(
          ([key2, value2]) => value2 === category2
        )
      );
    });

    if (sortBy === "name") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return -1;
          }
          if (a[1].name > b[1].name) {
            return 1;
          }
          return 0;
        });
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return 1;
          }
          if (a[1].name > b[1].name) {
            return -1;
          }
          return 0;
        });
      }
    } else if (sortBy === "price") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].price - b[1].price
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].price - a[1].price
        );
      }
    } else if (sortBy === "size") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].length - b[1].length
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].length - a[1].length
        );
      }
    }

    return filteredProducts;
  },
  getProductsByThreeCategories: (
    category,
    category2,
    category3,
    sortBy,
    order
  ) => {
    let filteredProducts = Object.entries(products).filter(([key, value]) => {
      return (
        Object.entries(value.category).some(
          ([key2, value2]) => value2 === category
        ) &&
        Object.entries(value.category).some(
          ([key2, value2]) => value2 === category2
        ) &&
        Object.entries(value.category).some(
          ([key2, value2]) => value2 === category3
        )
      );
    });

    if (sortBy === "name") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return -1;
          }
          if (a[1].name > b[1].name) {
            return 1;
          }
          return 0;
        });
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return 1;
          }
          if (a[1].name > b[1].name) {
            return -1;
          }
          return 0;
        });
      }
    } else if (sortBy === "price") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].price - b[1].price
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].price - a[1].price
        );
      }
    } else if (sortBy === "size") {
      if (order === "ascending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => a[1].length - b[1].length
        );
      } else if (order === "descending") {
        filteredProducts = filteredProducts.sort(
          (a, b) => b[1].length - a[1].length
        );
      }
    }

    return filteredProducts;
  },

  getProductById: (productId) => {
    return products[productId];
  },

  getAllProducts: (sortBy, order) => {
    let prods = Object.entries(products);

    if (sortBy === "name") {
      if (order === "ascending") {
        prods = prods.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return -1;
          }
          if (a[1].name > b[1].name) {
            return 1;
          }
          return 0;
        });
      } else if (order === "descending") {
        prods = prods.sort((a, b) => {
          if (a[1].name < b[1].name) {
            return 1;
          }
          if (a[1].name > b[1].name) {
            return -1;
          }
          return 0;
        });
      }
    } else if (sortBy === "price") {
      if (order === "ascending") {
        prods = prods.sort((a, b) => a[1].price - b[1].price);
      } else if (order === "descending") {
        prods = prods.sort((a, b) => b[1].price - a[1].price);
      }
    } else if (sortBy === "size") {
      if (order === "ascending") {
        prods = prods.sort((a, b) => a[1].length - b[1].length);
      } else if (order === "descending") {
        prods = prods.sort((a, b) => b[1].length - a[1].length);
      }
    }

    return prods;
  },
  manufacturerIcons: manufacturerIcons
};

const ProductsContext = React.createContext(productsData);

export const ProductsProvider = ProductsContext.Provider;
export const ProductsConsumer = ProductsContext.Consumer;

export default ProductsContext;
