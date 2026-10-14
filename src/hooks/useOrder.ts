import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db.ts";
import type  {menuItem,OrderItem} from '../types/';
export const useOrder = () => {
    const initialMenu = () => {
        const localStorageMenu = window.localStorage.getItem('MenuItem');
        return localStorageMenu ? JSON.parse(localStorageMenu) : [];
    };
    const [data, setData] = useState(db);

    const [auth, setAuth] = useState(false);
    const [total, setTotal] = useState(0);
    const [Menu, setMenu] = useState(initialMenu);

    //const min_items = 1;
    //const max_items = 5;

    const validMenu = (true);



    const isEmpty = useMemo(() => Menu.length === 0, [Menu]);




    useEffect(() => {
        window.localStorage.setItem('Menu', JSON.stringify(Menu));
    }, [Menu]);

    function handlerClick(item) {
        const ItemExists = cart.findIndex((MenuItem) => Menu.id === MenuItem.id);
        //console.log(guitarExists);
        //setCart((prevCart) => [...cart, { ...item }]);

        //console.log(cart);
        if (ItemExists >= 0) {
            const updatedMenu = [...Menu];
            updatedMenu[ItemExistsExists].quantity += 1;
            setMenu(updatedMenu);
        } else {
            setMenu((prevMenu) => [...prevMenu, { ...item, quantity: 1 }]);
        }
    }

    function calculateTotal() {
        return cart.reduce((total, item) => {
            if (!item) return total;
            return total + (item.quantity || 0) * (item.price || 0);
        }, 0);
    }

    function increaseQuantity(id) {
        const updatedMenu = Menu.map((item) => {

            if (item.id === id && item.quantity < max_items) {

                return {
                    ...item, quantity: item.quantity + 1,
                };

            }
            return item;
        });
        setCart(updatedMenu);

    }

    function decreaseQuantity(id) {
        const item = Menu.find((Menu) => Menu.id === id);

        if (item.quantity === min_items) {
            removeFromMenu(id)
        } else {
            const updatedMenu = cart.map((Menu) => {

                if (Menu.id === id) {
                    return {
                        ...Menu, quantity: Menu.quantity - 1,
                    };
                }
                return guitar;
            })

            setCart(updatedCart);

        }
    }

    function removeItem(id) {

        setMenu((prevMenu) => prevMenu.filter((Menu) => Menu.id !== id));

    }

    function emptyMenu() {

        setMenu([]);
    }





    useEffect(() => {
        console.log(Menu);
    }, [Menu]);

    /*
    data.map((guitar) => {
      console.log("guitarra encontrada");
    });
    */
    //UseEffect
    /*
    useEffect(() => {
      //Accion al cargar el componente
      console.log("Componente listo");
    }, []);
    useEffect(() => {
      //Accion al cambio de una vari
      // able
      console.log("Token cambio ");
    }, [auth]);
    setTimeout(() => {
      setAuth(true);
      setTotal(1000);
    }, 3000);
  */
    return {
        Menu,
        setMenu,
        data,
        handlerClick,
        decreaseQuantity,
        increaseQuantity,
        removeFromMenu,
        emptyMenu,
        calculateTotal,
        isEmpty


    }


}
