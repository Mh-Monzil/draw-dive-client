import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
    const allArtCraft = useLoaderData();
  return (
    <div className=" md:px-10">
      <h2 className="text-3xl font-semibold text-center my-8">All Art Craft Items</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>Item Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allArtCraft.map(item => <tr key={item._id}>
              <th>{item.user_name}</th>
              <td>{item.item_name}</td>
              <td>{item.stock_status}</td>
              <td>${item.price}</td>
              <td>{item.customization}</td>
              <td>
                <Link to={`/view_details/${item._id}`}>
                    <button className="btn bg-[#ff9276] text-white hover:bg-[#fd6e4b]">View Details</button>
                </Link>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraft;
