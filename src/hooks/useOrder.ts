import { useState, useEffect, useMemo } from "react";
//import { db } from "../data/db.ts";
import type { MenuItem, OrderItem } from '../types'; export const useOrder = () => {
    const initialMenu = (): OrderItem[] => {
        const localStorageOrder = window.localStorage.getItem('order');
        return localStorageOrder ? JSON.parse(localStorageOrder) : [];
    };
    //const [data, setData] = useState(db);

    const [order, setOrder] = useState<OrderItem[]>(initialMenu);
    const [tip, setTip] = useState(0);

    useEffect(() => {
        window.localStorage.setItem('order', JSON.stringify(order));
    }, [order]);
    //const min_items = 1;
    //const max_items = 5;
const addItem = (item: MenuItem) => {
        const itemExistIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemExistIndex >= 0) {
            const updatedOrder = [...order];
            updatedOrder[itemExistIndex].quantity += 1;
            setOrder(updatedOrder);
        } else {
            setOrder([...order, { ...item, quantity: 1 }]);
        }
    };

    const removeItem = (id: MenuItem['id']) => {
        setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
    };

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    };

    const isEmpty = useMemo(() => order.length === 0, [order]);
    
    const calculateTotal = useMemo(() => {
        return order.reduce((total, item) => total + (item.quantity * item.price), 0);
    }, [order]);

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,
        isEmpty,
        calculateTotal
    };
};

