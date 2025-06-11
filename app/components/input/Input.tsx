
interface InputProps{
    type?:string,
    placeholder?:string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    value,
    onChange
}) =>{
    return (
        <div className="w-full">
            <input className="w-full py-1 px-2 border border-gray-300 focus:outline-none rounded-md" type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input