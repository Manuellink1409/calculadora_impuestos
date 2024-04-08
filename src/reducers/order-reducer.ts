import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add_item"; payload: { item: MenuItem } }
  | { type: "delete_item"; payload: { id: MenuItem["id"] } }
  | { type: "place_order" }
  | { type: "add_tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const InitialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = InitialState,
  action: OrderActions
) => {
  if (action.type === "add_item") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );
    let order: OrderItem[] = [];
    if (itemExist) {
      order = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }
    return {
      ...state,
      order,
    };
  }
  if (action.type === "delete_item") {
    const order = state.order.filter(
      (orderItem) => orderItem.id !== action.payload.id
    );
    return {
      ...state,
      order,
    };
  }
  if (action.type === "place_order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }
  if (action.type === "add_tip") {
    const tip = action.payload.value;
    return {
      ...state,
      tip,
    };
  }
};
