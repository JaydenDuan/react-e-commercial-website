import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => {
      return product.price;
    });
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProducts = [...all_products];
    if (price) {
      tempProducts = tempProducts.filter((product) => {
        return product.price / 100 <= price / 100;
      });
    }
    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category) {
      tempProducts = tempProducts.filter((product) => {
        if (category === "all") {
          return product;
        }
        return product.category === category;
      });
    }
    if (company) {
      tempProducts = tempProducts.filter((product) => {
        if (company === "all") {
          return product;
        }
        return product.company === company;
      });
    }
    if (color) {
      tempProducts = tempProducts.filter((product) => {
        if (color === "all") {
          return product;
        }
        return product.colors.find((c) => c === color);
      });

      return { ...state, filtered_products: tempProducts };
    }
    console.log(tempProducts)
    return {...state, filtered_products: tempProducts}
    
  }
  if (action.type === CLEAR_FILTERS) {
     
    return {
      ...state,
      filters: {
        ...state.filters,
        price: state.filters.max_price,
        text: "",
        company: "all",
        category: "all",
        color: "all",

        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default filter_reducer;
