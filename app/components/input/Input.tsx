import styles from "./Input.module.scss"
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
        <div className={styles.container}>
            <input className={styles.input} type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input