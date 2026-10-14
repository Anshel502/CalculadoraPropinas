import MenuItem from "./components/MenuITem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercerntageForm from "./components/TipPercentageForm";
import { useOrder } from "./hooks/useOrder";
import { useState } from "react";
//imports
function App() {

  const { 
  Menu, 
  data, 
  handlerClick, 
  decreaseQuantity, 
  increaseQuantity, 
  removeFromMenu, 
  emptyMenu,
  calculateTotal,
  isEmpty
} = useOrder();

//Predice el tipo de dato con el useState el isActivity sera int 
//const [isActivity, setActivity] = useState<Number>(30);


  return (
    <>
      <MenuItem Menu={Menu} 
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeFromCart={removeFromMenu}
      emptyMenu={emptyMenu}
      total={calculateTotal()}
      isEmpty ={isEmpty} 
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((Menu) => (
            <Menu key={Menu.id}
              Menu={Menu} handlerClick={handlerClick} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Pizzeria Papantonio - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;