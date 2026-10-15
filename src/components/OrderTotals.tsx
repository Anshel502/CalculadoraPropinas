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
        <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="space-y-2">
                <h2 className="font-black text-2xl mb-4">Totales y Propina:</h2>
                <p className="text-lg">Subtotal a pagar: <span className="font-bold">${subtotalAmount.toFixed(2)}</span></p>
                <p className="text-lg">Propina: <span className="font-bold">${tipAmount.toFixed(2)}</span></p>
                <p className="text-lg">Total a Pagar: <span className="font-black text-teal-600 text-xl">${totalAmount.toFixed(2)}</span></p>
            </div>

            <button
                className="w-full bg-black hover:bg-gray-800 text-white p-3 uppercase font-bold mt-8 rounded-md transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </div>
    );
}