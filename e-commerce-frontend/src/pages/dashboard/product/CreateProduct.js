import React from "react";
import GenericInput from "../../../components/GenericInput";
import { Form, Formik } from "formik";

function CreateProduct() {
  return (
    <>
      <div className="flex flex-col items-start py-12 min-h-lvh sm:px-6 lg:px-8">
        <div className="mt-8 sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Formik>
              <Form className="space-y-4">
                <GenericInput
                  label="Product Name"
                  name="name"
                  type="text"
                  placeholder="Enter a Product Name"
                />
                <GenericInput
                  label="Price"
                  name="price"
                  type="number"
                  placeholder="Enter a Price"
                />
                <GenericInput
                  label="Description"
                  name="description"
                  type="text"
                  placeholder="Enter a Description"
                />
                <GenericInput
                  label="Brand"
                  name="brand"
                  type="text"
                  placeholder="Enter a Brand Name"
                />
                <GenericInput
                  label="Select Images"
                  name="image"
                  type="file"
                  placeholder="Select Product Images"
                  multiple="multiple"
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create a Product
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
