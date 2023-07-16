export const Form = () => {
  return (
    <div className="rounded-lg bg-white px-6 py-8 shadow sm:px-10">
      <form className="mb-0 space-y-6 bg-gray-300 p-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">
            File Name
          </label>
          <div className="mt-1">
            <input
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              id="name"
              type="text"
              name="name"
              placeholder="filename"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="select">
            Country
          </label>
          <div className="mt-1">
            <select
              name=""
              id="select"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">Peru</option>
              <option value="2">Colombia</option>
              <option value="3">Venezuela</option>
              <option value="4">Brazil</option>
              <option value="5">Argentina</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="file">
            File
          </label>
          <div className="mt-1">
            <input
              className="w-full shadow-sm "
              id="file"
              type="file"
              multiple
              name="file"
              placeholder="filename"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="terms-and-privacy" className="" />

          <label
            htmlFor="terms-and-privacy"
            className="ml-2 block text-sm text-gray-900"
          >
            I agree to the{" "}
            <a href="#" className="text-indigo-500 hover:text-indigo-500">
              Terms
            </a>
            and{" "}
            <a className="text-indigo-500 hover:text-indigo-500" href="#">
              Privacy Policy
            </a>
          </label>
        </div>

        <div>
          <button
            className="w-full rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
            type="submit"
          >
            Upload File
          </button>
        </div>
      </form>
    </div>
  );
};
