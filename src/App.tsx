import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

export default function App() {
  const { order, addItem } = useOrder();

  return (
    <>
      <header className="py-5">
        <h1 className="text-center text-4xl text-gray-50 font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-3xl text-gray-50 font-black mb-6">Menu</h2>
          <div className=" space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          {order.map((orderItem) => (
            <OrderContents key={orderItem.id} props={orderItem} />
          ))}
        </div>
      </main>
    </>
  );
}
