import{ useState } from "react";


const AddProduct = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);
    // const [gender, setGender] = useState("");
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
  
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    // const genders = ["Men", "Woman", "Unisex"];
  
    const toggleSize = (size) => {
      setSelectedSizes((prev) =>
        prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      );
    };
  
    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      const newImages = [...images, ...imageUrls];
      setImages(newImages);
      if (!activeImage && newImages.length > 0) setActiveImage(newImages[0]);
    };
  
    return (
      <div className="lg:px-4 pb-4">
        <div className=" flex justify-between items-center mb-4">
            <div className="flex gap-2 text-purple-900 justify-center items-center">
            <span className="material-symbols-rounded">add_ad</span>
            <h2 className="text-2xl font-bold">Add New Product</h2>
            </div>
            <button className=" flex justify-center items-center gap-2 bg-purple-900 text-white py-3 px-5 rounded-full hover:bg-purple-800 transition-all duration-200">
                <span className="material-symbols-rounded ">check</span>
            <p>
                Add product
            </p>
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* General Info */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">General Information</h3>
              <label htmlFor="text">Product Name</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full py-2 px-5 rounded-xl bg-[#f5f7f9] mb-4"
              />
              <label htmlFor="text">Brand Name</label>
              <input
                type="text"
                placeholder="Enter Brand Name"
                className="w-full py-2 px-5 rounded-xl bg-[#f5f7f9] mb-4"
              />
              <label htmlFor="text">Product Description</label>
              <textarea
                rows="4"
                placeholder="Description Product"
                className="w-full py-2 px-5 rounded-xl focus:outline-none bg-[#f5f7f9]"
              ></textarea>
  
              {/* Sizes */}
              <div className="mt-4">
                <h2 className="block text-sm font-medium mb-1">Size</h2>
                <label className="block text-sm mb-1 text-gray-400">Pick Available Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`px-3 py-2 rounded-xl border text-sm ${
                        selectedSizes.includes(size)
                          ? "bg-purple-100 border-purple-500 text-purple-900"
                          : "border-gray-300"
                      }`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Gender */}
              {/* <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <div className="flex items-center gap-4">
                  {genders.map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={() => setGender(g)}
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div> */}
            </div>
  
            {/* Pricing & Stock */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Pricing And Stock</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col ">
                <label htmlFor="text">Price</label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="p-2 rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                />
                </div>
                <div  className="flex flex-col ">
                 <label htmlFor="text">Stoct</label>
                <input
                  type="text"
                  placeholder="Stock"
                  className="p-2  rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                />
                </div>
                <div  className="flex flex-col">
                 <label htmlFor="text">Discount</label>
                <input
                  type="text"
                  placeholder="Discount"
                  className="p-2  rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                />
                </div>
                 {/* <label htmlFor="text">Price</label>
                <input
                  type="text"
                  placeholder="Discount Type"
                  className="p-2  rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                /> */}
              </div>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="space-y-6">
            {/* Upload Img */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Upload Image</h3>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 hidden"
              />
              <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mb-5">
                {activeImage && (
                  <img src={activeImage} alt="main" className="object-cover w-full h-full" />
                )}
              </div>
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-14 rounded-md overflow-hidden border ${
                      activeImage === img ? "border-purple-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt="preview"
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
                <label className="w-14 h-14 flex items-center justify-center border border-dashed border-gray-300 rounded-md cursor-pointer">
                <span className="material-symbols-rounded text-purple-500">add_circle</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
  
            {/* Category */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">Category</h3>
              <label htmlFor="text">Product Category</label>
              <input
                type="text"
                placeholder="Add Product Category"
                className="w-full p-2 px-4 rounded-xl focus:outline-none bg-[#f5f7f9]  mb-3"
              />
              <button className="w-[50%] bg-purple-300 hover:bg-purple-400 text-purple-900 font-medium py-3 rounded-full">
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AddProduct;

