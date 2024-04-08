import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useReducer } from "react";
import { InitialState, orderReducer } from "./reducers/order-reducer";

export default function App() {
  const [state, dispatch] = useReducer(orderReducer, InitialState);

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
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className=" border-2 border-dashed border-[#373332] p-12 rounded-xl">
          {state?.order.length ? (
            <>
              <h2 className=" text-3xl text-gray-50 font-black mb-4">
                Pedidos
              </h2>
              {state.order.map((orderItem) => (
                <OrderContents
                  key={orderItem.id}
                  props={orderItem}
                  dispatch={dispatch}
                />
              ))}
              <TipPercentageForm dispatch={dispatch} />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <>No hay pedidos</>
          )}
        </div>
      </main>
    </>
  );
}
