import type { MenuItem, OrderItem } from "../types";

type OrdItem = {
  props: OrderItem;
  deleteItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({ props, deleteItem }: OrdItem) {
  return (
    <>
      <div className="text-gray-50 mb-3">
        <div className="flex justify-between">
          <h1>
            {props.name} - ${props.price}
          </h1>
          <button
            onClick={() => deleteItem(props.id)}
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
