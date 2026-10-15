import type { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
    item: MenuItemType;
    addItem: (item: MenuItemType) => void;
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    const { name, price } = item;

    return (
        <div 
            className="border-2 border-teal-400 hover:bg-teal-200 p-3 rounded-lg mb-4 flex justify-between items-center w-full cursor-pointer transition-colors"
            onClick={() => addItem(item)}
        >
            <div className="flex justify-between w-full items-center">
                {"algo no se usar tailwild"}
                <h3 className="text-black text-lg">{name}</h3>
                
                {}
                <p className="font-black text-lg">${price}</p>
                
                {}
                <button 
                    type="button"
                    className="hidden"
                    onClick={() => addItem(item)}
                >
                    Agregar a la Orden
                </button>
            </div>
        </div>
    );
}