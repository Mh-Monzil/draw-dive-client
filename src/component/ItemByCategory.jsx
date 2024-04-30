import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ItemByCategory = () => {
    const item = useLoaderData();
    const categoryName = item.subcategory_name;
    console.log(categoryName);

    const [itemsByCategoryName, setItemsByCategoryName] = useState([]);
    const [allSubCategories, setAllSubCategories] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/craft_items")
        .then(res => res.json())
        .then(data => {
            setAllSubCategories(data);
        })
    },[])

    useEffect(() => {
        const remaining = allSubCategories?.filter(category => category.subcategory_name === categoryName);
    console.log(remaining , "remaining categories");
    setItemsByCategoryName(remaining)
    }, [allSubCategories])

    return (
        <div>
            item by 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                itemsByCategoryName?.map(item => <div key={item._id} className="card bg-base-100 border p-6 hover:scale-105 transition-all duration-500">
                <figure className="">
                  <img src={item.photo} alt="Shoes" className="rounded-xl h-60 w-full" />
                </figure>
                <div className="mt-4 flex flex-col">
                  <h2 className="card-title">{item.item_name}</h2>
                  <p className="my-2 h-[100px]">{item.short_description}</p>
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
              </div>)
            }
            </div>
        </div>
    );
};

export default ItemByCategory;