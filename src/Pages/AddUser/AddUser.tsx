/* eslint-disable */
import { useForm } from 'react-hook-form';
import { UserForm } from '../../Components/userform/UserForm';
export default function AddUser() {
  const {register, handleSubmit} = useForm();
  
const onSubmit = (data) => {
 console.log(data);
}

  return (
    <div className="bg-sky-100 m-5 rounded-md">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <form  onSubmit={handleSubmit(onSubmit)}
      className="lg:grid lg:grid-cols lg:gap-x-12 xl:gap-x-16"
    >
      <UserForm  rg={register} />
      <div className="mt-5 flex justify-center items-center">
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
       
      </div>
    </div>
  );
}
