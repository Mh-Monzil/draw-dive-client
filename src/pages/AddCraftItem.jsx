import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";

const AddCraftItem = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const { item_name } = data;
    console.log(data);
  };

  return (
    <div className="text-center">
      <h2 className="font-semibold text-4xl my-6">Add Craft Item</h2>
      <p className="font-medium">
        Add and sell your unique art and craft items on our platform, connecting
        creators with buyers worldwide
      </p>
      <div className="p-4">
        <form
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 lg:w-3/5 my-12 h-full mx-auto p-6 md:p-10 bg-white backdrop-blur-sm rounded-lg  shadow-md shadow-red-100"
        >
          <div className="flex justify-center mb-2">
            <span className="text-center text-2xl font-bold border-b-[3px] border-b-[#E76F51] px-4">
              Add your art & craft
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Item Name</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  {...register("item_name", { required: true })}
                />
              </div>
              {errors.item_name && (
                <span className="text-red-500">Item Name is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Category Name</span>
              </label>
              {/* <div className="relative"> */}
              <select
                id="country"
                name="country"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                {...register("category_name", { required: true })}
              >
                <option className="font-semibold" selected disabled>Select Category</option>
                <option className="font-semibold" value="Landscape Painting">Landscape Painting</option>
                <option className="font-semibold" value="Portrait Drawing">Portrait Drawing</option>
                <option className="font-semibold" value="Watercolor Painting">Watercolour Painting</option>
                <option className="font-semibold" value="Oil Painting">Oil Painting</option>
                <option className="font-semibold" value="Charcoal Sketching">Charcoal Sketching</option>
                <option className="font-semibold" value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
              {/* </div> */}
              {errors.category_name && (
                <span className="text-red-500">Category Name is required</span>
              )}
            </div>
            {/* input  */}
            <div className="col-span-2">
              <label className="label">
                <span className="font-semibold">Short Description</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="short_description"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  {...register("short_description", { required: true })}
                />
              </div>
              {errors.short_description && (
                <span className="text-red-500">Short Description is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Price</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="price"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  {...register("price", { required: true })}
                />
              </div>
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Rating</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min='1'
                  max='5'
                  name="rating"
                  
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  {...register("rating", { required: true })}
                />
              </div>
              {errors.rating && (
                <span className="text-red-500">Rating is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Customizable</span>
              </label>
              {/* <div className="relative"> */}
              <select
                id="country"
                name="customizable"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                {...register("customizable", { required: true })}
              >
                <option className="font-semibold" selected disabled>Select</option>
                <option className="font-semibold" value="Yes">Yes</option>
                <option className="font-semibold" value="No">No</option>
              </select>
              {/* </div> */}
              {errors.customizable && (
                <span className="text-red-500">Customizable Name is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Processing Time</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="processing_time"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  {...register("processing_time", { required: true })}
                />
              </div>
              {errors.processing_time && (
                <span className="text-red-500">Processing Time Name is required</span>
              )}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Stock Status</span>
              </label>
              {/* <div className="relative"> */}
              <select
                name="stock_status"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                {...register("stock_status", { required: true })}
              >
                <option className="font-semibold" selected disabled>Select Status</option>
                <option className="font-semibold" value="In Stock">In Stock</option>
                <option className="font-semibold" value="Made to Order">Made to Order</option>
              </select>
              {/* </div> */}
              {errors.stock_status && (
                <span className="text-red-500">Customizable Name is required</span>
              )}
            </div>
          </div>

          <div className="form-control mt-4">
            <button className="btn bg-[#E76F51] text-white font-semibold text-xl hover:bg-[#e25f3f] border border-[@#E76F51] hover:border-[#E76F51">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
