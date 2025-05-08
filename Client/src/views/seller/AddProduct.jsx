import{ useState } from "react";


const AddProduct = () => {

  const categorys = [
    { 
      id: 1,
      name: "T-shirt" 
    },
    {
      id: 2,
      name: "Pants"
    },
    {
      id: 3,
      name: "Shoes"
    },
    {
      id: 4,
      name: "Accessories"
    },
    {
      id: 5,
      name: "Hoodies"
    },
    {
      id: 6,
      name: "Sweaters"
    },
  ]

    const [selectedSizes, setSelectedSizes] = useState([]);
    // const [gender, setGender] = useState("");
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const [catShow, setCatShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("");
    const [allCategory, setAllCategory] = useState(categorys);

    const categorySearch = (e) => {
      const value = e.target.value;
      setSearchValue(value);
      if (value) {
        let srcValue = allCategory.filter(cat => cat.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
        setAllCategory(srcValue);
        
      } else {
        setAllCategory(categorys);
        
      }
    }

    const [state, setState] = useState({
        name: "",
        brand: "",
        description: "",
        price: "",
        stock: "",
        discount: "",
        category: "",
        size: [],
    });

    const handleInpute = (e) => { 
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
  
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    // const genders = ["Men", "Woman", "Unisex"];
  
    const toggleSize = (size) => {
      setSelectedSizes((prev) =>
        prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      );
    };
  
    // const handleImageUpload = (e) => {
    //   const files = Array.from(e.target.files);
    //   const imageUrls = files.map((file) => URL.createObjectURL(file));
    //   const newImages = [...images, ...imageUrls];
    //   setImages(newImages);
    //   if (!activeImage && newImages.length > 0) setActiveImage(newImages[0]);
    // };

    const handleImageUpload = (e) => {
      const files = e.target.files;
      const length = files.length;
      if (length > 0) {
        setImages([...images, ...files]);
        let imageUrls = [];
        for (let i = 0; i < length; i++) {
          imageUrls.push(URL.createObjectURL(files[i]));
        }
        setActiveImage(...activeImage, ...imageUrls);
      }
    }   

  
    
  
    return (
      <div className="lg:pl-4 lg:pr-7 pb-4">
        <div className=" flex justify-between px-4 lg:p-0 items-center mb-4">
            <div className="flex gap-2 text-purple-900 justify-center items-center">
            <span className="material-symbols-rounded">add_ad</span>
            <h2 className="lg:text-2xl font-bold">Add New Product</h2>
            </div>
            <button className=" flex justify-center items-center lg:gap-2 bg-purple-900 text-white lg:py-3 py-2 lg:px-5 px-3 rounded-full hover:bg-purple-800 transition-all duration-200">
                <span className="material-symbols-rounded">check</span>
            <p className="lg:text-md text-[11px] font-semibold">
                Add product
            </p>
            </button>
        </div>
        <div className="lg:grid flex-col lg:grid-cols-3 lg:gap-6 gap-3 px-3 lg:p-0">
          {/* General Info */}
          <div className="col-span-2 space-y-3 lg:space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-4">General Information</h3>
              <label htmlFor="product">Product Name</label>
              <input
                onChange={handleInpute}
                value={state.name}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Product Name"
                className="w-full py-2 px-5 rounded-xl bg-[#f5f7f9] focus:outline-none mb-4"
              />
              <label htmlFor="brand">Brand Name</label>
              <input
                type="text"
                name="brand"
                id="brand"
                onChange={handleInpute}
                value={state.brand} 
                placeholder="Enter Brand Name"
                className="w-full py-2 px-5 focus:outline-none rounded-xl bg-[#f5f7f9] mb-4"
              />
              <label htmlFor="description">Product Description</label>
              <textarea
                rows="4"
                cols="10"
                name="description"
                id="description"
                onChange={handleInpute}
                value={state.description}
                placeholder="Description Product"
                className="w-full scrollbar-hide py-2 px-5 rounded-xl focus:outline-none focus:outline-nonefocus:outline-none bg-[#f5f7f9]"
              ></textarea>
  
              {/* Sizes */}
              <div className="mt-3">
                <h2 className="block text-sm font-medium mb-1">Size</h2>
                <label className="block text-sm mb-1 text-gray-400">Pick Available Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      name="size"
                      id="size"
                      onChange={handleInpute}
                      value={state.size}
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
                  type="number"
                  name="price"
                  id="price"
                  onChange={handleInpute}
                  value={state.price}
                  placeholder="Enter Price"
                  className="p-2 rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                />
                </div>
                <div  className="flex flex-col ">
                 <label htmlFor="text">Stoct</label>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  onChange={handleInpute}
                  value={state.stock}
                  placeholder="Stock"
                  className="p-2  rounded-xl px-4 focus:outline-none bg-[#f5f7f9]"
                />
                </div>
                <div  className="flex flex-col">
                 <label htmlFor="text">Discount</label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  onChange={handleInpute}
                  value={state.discount}
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
          <div className="lg:space-y-6 space-y-3 mt-3 lg:mt-0">
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
            <div className="bg-white p-6 rounded-2xl shadow-sm relative">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold">Category</h3>
    <button className="lg:w-[50%] w-[40%] bg-purple-300 hover:bg-purple-400 text-purple-900 text-sm lg:text-md font-medium py-3 rounded-full">
      Add Category
    </button>
  </div>

  <label htmlFor="category">Product Category</label>
  <input
    readOnly
    onClick={() => setCatShow(!catShow)}
    type="text"
    id="category"
    onChange={handleInpute}
    value={category}
    placeholder="Select Product Category"
    className="w-full p-2 px-4 rounded-xl focus:outline-none bg-[#f5f7f9] mb-3"
  />

  {/* Dropdown */}
  <div
    className={`w-full bg-[#f5f7f9] transition-all rounded-xl ${
      catShow ? "block" : "hidden"
    }`}
  >
    {/* Search Input */}
    <div className="w-full px-4 py-2">
      <input
        value={searchValue}
        onChange={categorySearch}
        type="text"
        className="px-3 py-2 border border-[#e5e7eb] rounded-xl w-full outline-none focus:ring focus:ring-[#e5e7eb]"
        placeholder="Search category"
      />
    </div>

    {/* Scrollable list */}
    <div className="max-h-48 overflow-y-auto px-4 pb-2 scrollbar-hide">
      {allCategory.map((cat, i) => (
        <span
          key={i}
          onClick={() => {
            setCatShow(false);
            setCategory(cat.name);
            setSearchValue("");
            setAllCategory(categorys);
          }}
          className={`cursor-pointer block px-2 py-1 hover:bg-gray-200 rounded ${
            category === cat.name && "bg-gray-200"
          }`}
        >
          {cat.name}
        </span>
      ))}
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
  );
}

export default AddProduct;

