/* eslint-disable react/prop-types */
export function UserForm({ rg }: any) {
  return (
    <>
      <div>
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            Contact information
          </h2>

          <div className="mt-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email-address"
                name="email-address"
                autoComplete="email"
                {...rg('email')}
                className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 border-t border-gray-200 pt-2">
          <h2 className="text-lg font-medium text-gray-900">
            Shipping information
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  {...rg('firstname')}
                  autoComplete="given-name"
                  className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  {...rg('lastname')}
                  autoComplete="family-name"
                  className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  {...rg('address')}
                  id="address"
                  autoComplete="street-address"
                  className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  {...rg('city')}
                  autoComplete="address-level2"
                  className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  {...rg('country')}
                  autoComplete="country-name"
                  className="block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
