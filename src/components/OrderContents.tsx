import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-3xl font-black text-stone-800 mb-6 border-b-2 border-red-500 pb-2 inline-block">
                Consumo Actual
            </h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {order.map(item => (
                    <div 
                        key={item.id} 
                        className="flex justify-between items-center bg-stone-50 p-4 rounded-lg border border-stone-200 shadow-sm"
                    >
                        <div>
                            <p className="text-lg font-bold text-stone-800">
                                {item.name} <span className="text-red-500 text-base font-medium ml-2">(${item.price})</span>
                            </p>
                            <p className="font-semibold text-stone-500 mt-1">
                                Cantidad: <span className="text-stone-800">{item.quantity}</span> 
                                <span className="mx-2">|</span> 
                                Subtotal: <span className="font-black text-stone-800">${item.price * item.quantity}</span>
                            </p>
                        </div>
                        <button
                            className="bg-white border-2 border-red-200 text-red-500 hover:bg-red-500 hover:text-white h-10 w-10 rounded-full font-black transition-colors flex items-center justify-center shadow-sm"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}