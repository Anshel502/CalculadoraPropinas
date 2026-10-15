import { useMemo } from "react";
import type { OrderItem } from "../types";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);

    return (
        <div className="mt-8">
            <div className="bg-stone-800 p-6 rounded-lg shadow-inner text-stone-100 space-y-3">
                <h2 className="font-black text-2xl mb-4 text-amber-400">Total a Pagar</h2>
                <p className="text-lg flex justify-between font-medium">
                    Subtotal: <span>${subtotalAmount.toFixed(2)}</span>
                </p>
                <p className="text-lg flex justify-between font-medium">
                    Propina: <span>${tipAmount.toFixed(2)}</span>
                </p>
                <div className="border-t border-stone-600 my-4 border-dashed"></div>
                <p className="text-2xl flex justify-between font-black text-white">
                    Total: <span className="text-red-400">${totalAmount.toFixed(2)}</span>
                </p>
            </div>

            <button
                className="w-full bg-red-600 hover:bg-red-700 text-white p-4 uppercase font-black text-xl mt-6 rounded-lg transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </div>
    );
}