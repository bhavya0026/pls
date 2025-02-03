import React, { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Product Image & Thumbnails */}
        <div>
          <img
            src="/img/product-main.jpg"
            alt="Product"
            className="w-full rounded-lg"
          />
          <div className="flex gap-2 mt-4">
            <img
              src="/img/product-thumb1.jpg"
              alt="Thumb1"
              className="w-16 h-16 rounded-md"
            />
            <img
              src="/img/product-thumb2.jpg"
              alt="Thumb2"
              className="w-16 h-16 rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold">PHOTO KEYCHAIN</h1>
          <p className="text-lg text-gray-600">Rs. 249.00</p>
          <p className="mt-2 text-gray-700">
            Celebrate love in the most personal way with our Valentine’s
            Exclusive Postcard Plaque.
          </p>
          <p className="font-bold mt-4">
            Standard Delivery: 10 to 12 Working Days
          </p>

          {/* Upload File */}
          <div className="mt-4">
            <label className="flex items-center gap-2 border p-2 rounded cursor-pointer">
              <input type="file" className="hidden" />
              <span className="text-gray-700">Upload File</span>
            </label>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="border px-3 py-1"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-brown-500 text-white px-6 py-2 rounded">
              Buy Now
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Suggested For You</h2>
        <div className="flex gap-4 overflow-x-auto">
          <img
            src="/img/suggest1.jpg"
            alt="Suggested 1"
            className="w-32 h-32 rounded-md"
          />
          <img
            src="/img/suggest2.jpg"
            alt="Suggested 2"
            className="w-32 h-32 rounded-md"
          />
          <img
            src="/img/suggest3.jpg"
            alt="Suggested 3"
            className="w-32 h-32 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
