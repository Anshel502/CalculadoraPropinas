import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl mb-6">Consumo</h2>
            
            <div className="space-y-3">
                {order.map(item => (
                    <div 
                        key={item.id} 
                        className="flex justify-between items-center border-b border-gray-200 py-4 last-of-type:border-b-0"
                    >
                        <div>
                            <p className="text-lg font-bold">
                                {item.name} - ${item.price}
                            </p>
                            <p className="font-black text-teal-600">
                                Cantidad: {item.quantity} - Total: ${item.price * item.quantity}
                            </p>
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 h-8 w-8 rounded-full text-white font-black"
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