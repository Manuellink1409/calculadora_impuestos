import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type itemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: itemProps) {
  return (
    <>
      <button
        className=" border-[#262322] border-2 flex justify-between p-4 w-full hover:bg-[#F3AB65] rounded-lg"
        onClick={() => dispatch({ type: "add_item", payload: { item: item } })}
      >
        <p className=" text-gray-50">{item.name}</p>
        <p className=" text-gray-50 font-bold">${item.price}</p>
      </button>
    </>
  );
}
