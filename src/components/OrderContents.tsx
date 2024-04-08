import { Dispatch } from "react";
import type { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type OrdItem = {
  props: OrderItem;
  dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ props, dispatch }: OrdItem) {
  return (
    <>
      <div className="text-gray-50 mb-3">
        <div className="flex justify-between">
          <h1>
            {props.name} - ${props.price}
          </h1>
          <button
            onClick={() =>
              dispatch({ type: "delete_item", payload: { id: props.id } })
            }
            className=" bg-red-800 rounded-full w-6 hover:bg-red-600 transition-colors"
          >
            X
          </button>
        </div>
        <p className=" font-black mb-2">
          Cantidad: {props.quantity} - ${props.price * props.quantity}
        </p>
      </div>
    </>
  );
}
