import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder, isEmpty } = useOrder();

  return (
    <div className="bg-amber-50 min-h-screen pb-10 font-sans">
      <header className="bg-red-700 py-8 shadow-md border-b-4 border-red-800">
        <h1 className="text-center text-4xl font-black text-white uppercase tracking-widest">
          Pizzería Papantonio
        </h1>
        <p className="text-center text-amber-200 mt-2 font-semibold text-lg">
          Calculadora de Consumo y Propinas
        </p>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-5 grid md:grid-cols-2 gap-10">
        
        {/* Menú */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 h-fit">
          <h2 className="text-3xl font-black text-stone-800 mb-6 border-b-2 border-red-500 pb-2 inline-block">
            Nuestro Menú
          </h2>
          <div className="space-y-4">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        {/* Resumen de la Orden */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 h-fit sticky top-6">
          {isEmpty ? (
            <div className="py-20 text-center">
              <p className="text-2xl font-black text-stone-300 uppercase">La orden está vacía</p>
              <p className="text-stone-500 mt-2 font-medium">Selecciona deliciosos platillos del menú</p>
            </div>
          ) : (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </div>
        
      </main>
    </div>
  );
}

export default App;