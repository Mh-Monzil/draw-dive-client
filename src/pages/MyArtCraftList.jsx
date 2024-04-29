import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyArtCraftList = () => {
  const { user } = UseAuth();
  const [myItems, setMyItems] = useState([]);
  console.log(user?.email);
  console.log(myItems);
  useEffect(() => {
    fetch(`http://localhost:5000/craft_items/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/craft_items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myItems?.filter((item) => item._id !== id);
        setMyItems(remaining);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-5">
        My Art Craft List
      </h2>
      {myItems?.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myItems?.map((item) => (
            <div
              key={item._id}
              className="card bg-base-100 border p-6 hover:scale-105 transition-all duration-500"
            >
              <figure className="">
                <img
                  src={item.photo}
                  alt="Shoes"
                  className="rounded-xl h-60 w-full"
                />
              </figure>

              <div className="mt-4 flex flex-col">
                <h2 className="card-title">{item.item_name}</h2>
                <p className="my-2">{item.short_description}</p>
                <div className="my-2 space-y-1">
                  <p className="font-medium">
                    <span className="font-semibold">Processing Time: </span>
                    {item.processing_time}
                  </p>
                  <p className="font-medium">
                    <span className="font-semibold">Customizable: </span>
                    {item.customization}
                  </p>
                  <p className="font-medium">
                    <span className="font-semibold">Rating: </span>
                    {item.rating}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 my-4">
                  <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-semibold text-lg rounded-full w-fit">
                    ${item.price}
                  </span>
                  <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-medium text-lg rounded-full w-fit">
                    {item.stock_status}
                  </span>
                </div>

                <div className="card-actions flex gap-6">
                  <Link to={`/update_item/${item._id}`}>
                    <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b] px-6">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b] px-6"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold text-center mt-60 h-[25vh]">No items added yet</p>
      )}
    </div>
  );
};

export default MyArtCraftList;
