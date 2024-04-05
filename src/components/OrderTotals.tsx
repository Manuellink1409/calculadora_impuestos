import { useMemo } from "react";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((pv, cv) => pv + cv.price * cv.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <div className="text-gray-50">
      <h1 className=" font-black text-xl">Totales Y Propina:</h1>
      <p>
        Subtotal a pagar: <span className=" font-black">${subtotalAmount}</span>
      </p>
      <p>
        Propina: <span className=" font-black">${tipAmount}</span>
      </p>
      <p>
        Total a pagar: <span className=" font-black">${totalAmount}</span>
      </p>

      <button
        className=" bg-[#F3AB65] enabled:hover:bg-[#e49c54] transition-colors mt-12 text-black font-bold p-2 w-full disabled:opacity-20 "
        disabled={tipAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>
    </div>
  );
}
