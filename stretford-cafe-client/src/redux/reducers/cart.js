// import { counterUpAction, counterDownAction, sizeProduct, idProduct, timeProduct, deliveryProduct, pictProduct, nameProduct, priceProduct } from "../actionCreator/actionString"

// const initialState = {
//   qty: 0,
//   id: "",
//   price: 0,
//   size: [],
//   delivery: "",
//   time: "",
//   name: "",
//   pictures: "",
// }

// const cartReducers = (prevState = initialState, action) => {
//   switch (action.type) {
//     case counterUpAction:
//       return { ...prevState, qty: prevState.qty + 1 }
//     case counterDownAction:
//       return { ...prevState, qty: prevState.qty - 1 }
//     case idProduct:
//       const { id } = action.payload
//       return { ...prevState, id }
//     case sizeProduct:
//       const { size }  = action.payload
//       return { ...prevState, size }
//     case timeProduct:
//       const { time } = action.payload
//       return { ...prevState, time }
//     case deliveryProduct:
//       const { delivery } = action.payload
//       return { ...prevState, delivery }
//     case pictProduct:
//       const { pictures } = action.payload
//       return { ...prevState, pictures }
//     case nameProduct:
//       const { name } = action.payload
//       return { ...prevState, name }
//     case priceProduct:
//       const { price } = action.payload
//       return { ...prevState, price }
//     default:
//       return prevState
//   }
// };

// export default cartReducers;

// // const initialState = {
// //   item: [],
// // };

// // const CartItem = (state = initialState, action) => {
// //   switch (action.type) {
// //     case "SET_CART_FULFILLED":
// //       return {
// //         ...state,
// //         item: action.payload,
// //       };

// //     case "DEL_CART_FULFILLED":
// //       return {
// //         ...state,
// //         item: [],
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // export default deliveryItem;

import { setCartFulfilled } from "../actionCreator/actionString";

const initialState = {
    productId: "",
    size: "",
    delivery: ""
}

const addCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case setCartFulfilled:
            return { ...prevState, size: action.size, delivery: action.delivery, productId: action.productId}

        default:
            return { ...prevState }
    }
}

export default addCartReducer