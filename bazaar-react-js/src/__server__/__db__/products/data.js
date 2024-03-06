import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as grocery1 } from "../grocery-1/data";
import { products as grocery2 } from "../grocery-2/data";
import { products as grocery3 } from "../grocery-3/data";
import {
  relatedProducts,
  frequentlyBoughtData,
} from "../related-products/data";
const dbProducts = [...bazaarReactDatabase, ...products];

// all used products in the bazaar template
const productList = [
  ...dbProducts,
  ...grocery1,
  ...grocery2,
  ...grocery3,
  ...relatedProducts,
  ...frequentlyBoughtData,
];

// get unique products from prouct list
const uniqueProudcts = [...new Set(productList.map((item) => item.slug))].map(
  (item) => productList.find((it) => it.slug === item)
);

//end custom get path slug

// get the all slugs
const slugs = uniqueProudcts.map((item) => ({
  params: {
    slug: item.slug,
  },
}));

// get product names for search
const search = uniqueProudcts.slice(0, 6).map((item) => item.title);
export { uniqueProudcts, slugs, search };
