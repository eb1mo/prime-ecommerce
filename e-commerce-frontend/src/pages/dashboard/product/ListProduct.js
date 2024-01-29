import MenuButton from "../../../components/MenuButton";

const products = [
  {
    name: "T-shirt",
    price: 200,
    description: "This is the tshirt",
    brand: "Supreme",
    createdAt: "2020-01-07"
  }
];

export default function ListProduct() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Created At</th>
          <th className="relative px-6 py-3">
            <span className="">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map((person) => (
          <tr key={person.email}>
            <td>{person.name}</td>
            <td>{person.price}</td>
            <td>{person.description}</td>
            <td>{person.brand}</td>
            <td>{person.createdAt}</td>
            <td>
              <MenuButton
                links={[
                  { onClick: () => {}, label: "Update" },
                  { onClick: () => {}, label: "Delete" }
                ]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
