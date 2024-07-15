import { Path, FieldValues, UseFormRegister} from 'react-hook-form'


type TypeInput<TypeFieldValues extends FieldValues> = {
<<<<<<< HEAD
    name: Path<TypeFieldValues>,
    label: string,
    type?: string,
    register: UseFormRegister<TypeFieldValues>,
    error?: string
=======
    name:Path<TypeFieldValues>,
    label:string,
    type?:string,
    register:UseFormRegister<TypeFieldValues>,
    error?:string,
>>>>>>> 38a0a5f6846cf052f98a97a51ad0e376e30ebba4
}

const Input = <TypeFieldValues extends FieldValues> ({
    name,
    label,
    type = "text", 
    register,
    error,
} : TypeInput<TypeFieldValues>) => {
    return (
        <div className='text-left max-w-[400px]'>
            <label className='text-logintext text-[12px] md:text-[14px] font-bold'>{label}</label>
            <input
                className={`block border-[1px] border-solid ${error ? 'border-red-500' : 'border-[rgba(220, 217, 217, 1)]'}
                rounded-md md:p-[5px] focus:outline-none w-[100%] mb-[14px]`}
                type={type}
                {...register(name)}
            />
            {error && <p className="text-red-500 text-[12px]">{error}</p>}
        </div>
    )
}

export default Input
