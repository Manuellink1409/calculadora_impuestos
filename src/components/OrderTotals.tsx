import { useMemo } from "react";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
};

export default function OrderTotals({ order }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((pv, cv) => pv + cv.price * cv.quantity, 0),
    [order]
  );

  return (
    <div className="text-gray-50">
      <h1 className=" font-black text-xl">Totales Y Propina:</h1>
      <p>
        Subtotal a pagar: <span className=" font-black">{subtotalAmount}</span>
      </p>
      <p>
        Propina: <span className=" font-black">{subtotalAmount * 1.1}</span>
      </p>
      <p>
        Total a pagar: <span className=" font-black">$0</span>
      </p>
    </div>
  );
}
