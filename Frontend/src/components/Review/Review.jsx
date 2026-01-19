import React from "react";
import review from "./Review.json";

function Review() {
  return (
    <div className="  bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 h-100 text-black p-8">
        {review.map((review) => (
          <div
            key={review.id}
            className="bg-white p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.pic}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />


              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.address}</p>
              </div>
            </div>

            <h4 className="font-semibold text-lg mb-1">
              {review.title}
            </h4>

            <p className="text-gray-600 text-sm mb-3">
              {review.comment}
            </p>

            <p className="text-yellow-500 font-medium">
              ⭐ {review.rating} / 5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
