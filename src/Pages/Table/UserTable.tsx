/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link, useNavigate } from 'react-router-dom';
import { ITableUser } from '../../Types/Table';
import { IUser } from '../../Types/User';
import { useEffect, useState } from 'react';
import { CustomInstance } from '../../Utils/CustomInstance';

export default function UserTable() {
  const navigate = useNavigate();
  const [userinformation, setuserinformation] = useState<IUser[]>([]);
  const [loader, setloader] = useState<boolean>(true);
  useEffect(() => {
    const dataload = async () => {
      try {
        const { data } = await CustomInstance.get(`/information`);
        console.log(data);
        setuserinformation(data);
        setloader(false);
      } catch (error) {
        console.log(error);
        setloader(false);
      }
    };
    dataload();
  }, []);

  const DeleteOperation = async (id: number | string) => {
    try {
      const { data } = await CustomInstance.delete(`/information/${id}`);
      setuserinformation(prev => prev.filter(item => item?.id !== id));
      console.log(data);
    } catch (error) {
      console.log('delete error');
    }
  };

  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={() => navigate('/adduser')}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {userinformation.map(person => (
                  <tr key={person?.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person?.firstname}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person?.lastname}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person?.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person?.city}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex gap-3">
                      <span
                        onClick={() =>
                          navigate(`/edit/${person?.id}`, { state: person })
                        }
                        className="text-indigo-700 font-bold block cursor-pointer"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => DeleteOperation(person?.id)}
                        className="text-red-700 font-bold block cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
