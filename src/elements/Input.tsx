import { Path, FieldValues, UseFormRegister} from 'react-hook-form'

//////////Input Type
type TypeInput<TypeFieldValues extends FieldValues> = {
    name:Path<TypeFieldValues>,
    label:string,
    type?:string,
    register:UseFormRegister<TypeFieldValues>,
    error?:string
}


const Input =<TypeFieldValues extends FieldValues> ({
    name,
    label,
    type,
    register,
    error,
} : TypeInput<TypeFieldValues>) => {
  return (
    <div className='text-left max-w-[400px]'>
        <label className='text-logintext text-[12px] md:text-[14px] font-bold'>{label}</label>
        <input className='block border-[1px] border-solid border[rgba(220, 217, 217, 1)]
        rounded-md md:p-[5px] focus:outline-none w-[100%] mb-[14px]'
        type={type} 
        {...register(name)}
        isInvalid={error? true : false}
        />
        
    </div>
  )
}

export default Input