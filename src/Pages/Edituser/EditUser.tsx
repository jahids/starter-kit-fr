/* eslint-disable */
import { useForm } from 'react-hook-form';
import { UserForm } from '../../Components/userform/UserForm';
import { CustomInstance } from '../../Utils/CustomInstance';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { notifyError, notifySuccess } from '../../Utils/Toastify';
export default function EditUser() {
  const {register, handleSubmit, reset, setValue } = useForm();
  const {state} = useLocation()
  const {id} = useParams()
  console.log("state",state);

const onSubmit = async(data: any) => {
try {
  const informationSend = await CustomInstance.put(`/information//${id}`,data)
  console.log(informationSend?.data)
  notifySuccess(`information updated`)
} catch (error) {
  console.log('information not saved', error)
  notifyError(`information Update failed`)
}
 console.log(data);
}

useEffect(() => {
     // Set default values for the form fields using setValue
     setValue('email', state?.email);
     setValue('city', state.city);
     setValue('country', state?.country);
     setValue('firstname', state.firstname);
     setValue('lastname', state.lastname);
     setValue('address', state?.address);
  }, [setValue]);


  return (
    <div className="bg-sky-100 m-5 rounded-md">
        <h2 className="text-xl text-center py-2 font-bold uppercase">updated your information</h2>
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <form  onSubmit={handleSubmit(onSubmit)}
      className="lg:grid lg:grid-cols lg:gap-x-12 xl:gap-x-16"
    >
      <UserForm  rg={register} data={state} />
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
