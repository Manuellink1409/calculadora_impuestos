import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

export default function App() {
  const { order, addItem, deleteItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="mt-20">
        <h1 className="text-center text-4xl text-gray-50 font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-12">
          <h2 className=" text-3xl text-gray-50 font-black mb-6">Menu</h2>
          <div className=" space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" border-2 border-dashed border-[#373332] p-12 rounded-xl">
          {order.length === 0 ? (
            <p className="text-gray-50 text-2xl font-black">
              Aún no hay pedidos
            </p>
          ) : (
            <>
              <h2 className=" text-3xl text-gray-50 font-black mb-4">
                Pedidos
              </h2>
              {order.map((orderItem) => (
                <OrderContents
                  key={orderItem.id}
                  props={orderItem}
                  deleteItem={deleteItem}
                />
              ))}

              <TipPercentageForm setTip={setTip} />

              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
