import React from "react";

function CreateProduct() {
  return (
    <>
      <div className="flex flex-col items-start py-12 min-h-lvh sm:px-6 lg:px-8">
        <div className="mt-8 sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create a Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
