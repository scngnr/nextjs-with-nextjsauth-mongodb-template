"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const Input = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    errors
}: InputProps) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar
                    size={24}
                    className="text-neutral-700 absolute top-5 left-2"
                />
            )}
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=""
                className={`
                    peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed
                    ${formatPrice ? "pl-9" : "pl-4"}
                    ${errors[id] ? "border-rose-500" : "border-neutral-300"}
                    ${errors[id] ? "focus:border-rose-500" : "focus:border-gray-500/50"}
                `}
            />
            <label className={`
                    absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:-translate-y-4
                    peer-focus:scale-75
                    ${errors[id]? "text-rose-500" : "text-neutral-500"}
                `}>
                {label}
            </label>
        </div>
    );
}

export default Input;