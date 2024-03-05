// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "../../mock";
import shuffle from "lodash/shuffle";
import * as db from "./data";
const getProducts = (type) => {
  return db.products.filter((item) => item.for.allProduct === type);
};

const getProductsPopular = (type) => {
  return db.products.filter((item) => item.for.popu === type);
};

const getProductsTrend = (type) => {
  return db.products.filter((item) => item.for.trend === type);
};

const getProductsMenu = (type) => {
  return db.products.filter((item) => item.for.cate === type);
};
Mock.onGet("/api/grocery-1/navigation").reply(() => {
  try {
    return [200, db.categoryNavigation];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
Mock.onGet("/api/grocery-1/services").reply(async () => {
  try {
    return [200, db.serviceList];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
Mock.onGet("/api/grocery-1/products?tag=popular").reply(async () => {
  try {
    return [200, getProductsPopular("popular-products")];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
Mock.onGet("/api/grocery-1/products?tag=trending").reply(async () => {
  try {
    return [200, getProductsTrend("trending-products")];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
Mock.onGet("/api/grocery-1/products").reply(async () => {
  try {
    return [200, getProducts("all-products")];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
Mock.onGet("/api/grocery-1/category-based-products").reply(async (config) => {
  try {
    return [200, shuffle(getProductsMenu(config.params.category))];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});

Mock.onPost("/api/grocery-1/get-products-grocery").reply(async (config) => {
  try {
    return [200, getProductsMenu(config.data)];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});