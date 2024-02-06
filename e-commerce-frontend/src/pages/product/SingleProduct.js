import { useParams } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const images = [
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg"
];

export default function SingleProduct() {
  const { id } = useParams();

  const { data, loading, error, refetch } = useFetch(
    `${process.env.REACT_APP_API_URL}/product/${id}`
  );

  const { data: product } = data || {};
  const images =
    product?.images?.map(
      (image) => process.env.REACT_APP_API_URL + "/" + image
    ) || [];

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ImageGallery images={images} />

          <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product?.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product?.price}</p>
            </div>

            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              />
            </div>

            <div className="mt-6">
              <div className="flex mt-10 sm:flex-col1">
                <button
                  type="submit"
                  className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}