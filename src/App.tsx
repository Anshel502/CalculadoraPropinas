import MenuItem from "./components/MenuITem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useOrder } from "./hooks/useOrder";
import { menuItems } from "./data/db";
import { useState } from "react";
//imports
function App() {

  const { 
  order, 
  tip,
  setTip,
  addItem, 
  removeItem, 
  placeOrder,
  isEmpty
} = useOrder();

//Predice el tipo de dato con el useState el isActivity sera int 
//const [isActivity, setActivity] = useState<Number>(30);


  return (
    <>
      <header className="bg-dark py-5">
        <h1 className="text-center text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="container-xl mt-5">
        <h2 className="text-center">Menú</h2>

        <div className="row mt-5">
          {/* Columna Izquierda: Menú */}
          <div className="col-md-6">
            {menuItems.map((item) => (
              <MenuItem key={item.id}
                item={item} addItem={addItem} />
            ))}
          </div>

          {/* Columna Derecha: Resumen */}
          <div className="col-md-6">
            <div className="border border-secondary p-4 rounded">
              {isEmpty ? (
                <p className="text-center fs-4">La orden esta vacia</p>
              ) : (
                <>
                  <OrderContents order={order} removeItem={removeItem} />
                  <TipPercentageForm setTip={setTip} tip={tip} />
                  <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Pizzeria Papantonio - Todos los derechos Reservados por papadio
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;