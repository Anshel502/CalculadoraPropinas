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
        <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-black text-2xl mb-4">Propina:</h3>
            <form className="flex flex-col gap-2">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2 items-center">
                        <input
                            type="radio"
                            id={tipOption.id}
                            name="tip"
                            value={tipOption.value}
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                        <label className="text-lg" htmlFor={tipOption.id}>{tipOption.label}</label>
                    </div>
                ))}
            </form>
        </div>
    );
}