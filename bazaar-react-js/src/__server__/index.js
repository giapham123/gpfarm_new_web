import Mock from "./mock";
import "./__db__/grocery-1";
import "./__db__/grocery-2";
import "./__db__/grocery-3";
import "./__db__/related-products";
import "./__db__/products";
import "./__db__/dashboard";
Mock.onAny().passThrough();
