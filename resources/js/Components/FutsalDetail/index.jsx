import React from "react";

function FutsalDetail({
    futsal_listing,
    showFullDescription,
    toggleDescription,
}) {
    const shortenDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + " ... ";
    };
    return (
        <div>
            <div className="min-w-[200px] min-h-[200px] lg:w-[750px] lg:h-[400px] mt-8 ">
                <img
                    src={`http://127.0.0.1:8000/storage/${futsal_listing.images[0]}`}
                    alt={futsal_listing.title}
                    className="w-full h-full object-cover rounded-sm"
                />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <span>
                        <p className="text-lg text-text font-semibold">
                            {futsal_listing.title}
                        </p>
                        <p className=" text-text ">{futsal_listing.location}</p>
                    </span>
                    <span className="">
                        <p className="text-lg text-text font-semibold">
                            Rs. {futsal_listing.price}/hr
                        </p>
                    </span>
                </div>
                <div className="text-justify text-gray-700 leading-7 mt-6">
                    {showFullDescription
                        ? futsal_listing.long_description
                        : shortenDescription(
                              futsal_listing.long_description,
                              200
                          )}

                    {showFullDescription ? (
                        <span
                            className="font-bold text-text cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Less
                        </span>
                    ) : (
                        <span
                            className="font-bold text-text cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Read More
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FutsalDetail;
