import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
    { id: 'tip-10', value: .10, label: '10%' },
    { id: 'tip-20', value: .20, label: '20%' },
    { id: 'tip-50', value: .50, label: '50%' },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>;
    tip: number;
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div className="mt-8 bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h3 className="font-black text-xl text-stone-800 mb-4">Propina para el mesero:</h3>
            <form className="flex gap-6">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex items-center gap-2">
                        <input
                            type="radio"
                            id={tipOption.id}
                            name="tip"
                            value={tipOption.value}
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                            className="w-5 h-5 accent-red-600 cursor-pointer"
                        />
                        <label className="text-lg font-bold text-stone-700 cursor-pointer" htmlFor={tipOption.id}>
                            {tipOption.label}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
}