import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyArtCraftList = () => {
  const { user } = UseAuth();
  const [myItems, setMyItems] = useState();
  const { email } = user;
  console.log(email);
  console.log(myItems);
  useEffect(() => {
    fetch(`https://painting-server-wheat.vercel.app/craft_items/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-5">
        My Art Craft List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myItems?.map((item) => (
          <div key={item._id} className="card bg-base-100 border p-6 hover:scale-105 transition-all duration-500">
            <figure className="">
              <img src={item.photo} alt="Shoes" className="rounded-xl h-60 w-full" />
            </figure>
            <div className="mt-4 flex flex-col">
              <h2 className="card-title">{item.item_name}</h2>
              <p className="my-2">{item.short_description}</p>
              <div className="flex flex-col sm:flex-row gap-5 my-4">
                <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-semibold text-lg rounded-full w-fit">
                  ${item.price}
                </span>
                <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-medium text-lg rounded-full w-fit">
                  {item.stock_status}
                </span>
              </div>
              <div className="card-actions">
                <Link to={`/view_details/${item._id}`}>
                  <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
