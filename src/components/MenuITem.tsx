import type { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
    item: MenuItemType;
    addItem: (item: MenuItemType) => void;
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    const { name, price } = item;

    return (
        <button
            className="w-full flex justify-between items-center p-4 border-2 border-amber-100 hover:border-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group"
            onClick={() => addItem(item)}
        >
            <p className="text-lg font-bold text-stone-700 group-hover:text-red-700 transition-colors">
                {name}
            </p>
            <p className="font-black text-xl text-red-600 bg-white px-3 py-1 rounded-md shadow-sm border border-amber-100">
                ${price}
            </p>
        </button>
    );
}