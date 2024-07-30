
// import { useForm, FormProvider } from 'react-hook-form';
// import Input from '../elements/Input';


// type FormValues = {
//     username: string;
//     email: string;
    
//   };
// export default function Form() {
//     const methods = useForm<FormValues>();
//     const onSubmit = (data: FormValues) => {
//         console.log(data); 
//       };
//   return (
//     <FormProvider {...methods}>
//     <form onSubmit={methods.handleSubmit(onSubmit)}>
//       <Input
//         label="name"
//         name="name"
//         type="text"
//         placeholder="Enter the user name"
//       />
//            <p className="font-bold text-red-600 text-left mb-[14px]">{errors.email?.message}</p>
//       <Input
//         label="email"
//         name="email"
//         type="email"
//         placeholder="Enter the password"
//       />
      
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//        submit
//       </button>
//     </form>
//   </FormProvider>
//   )
// }
