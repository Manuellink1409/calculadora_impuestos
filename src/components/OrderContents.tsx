import type { OrderItem } from "../types";

type OrdItem = {
  props: OrderItem;
};

export default function OrderContents({ props }: OrdItem) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h1>{props.id}</h1>
      <h3>{props.quantity}</h3>
    </div>
  );
}
