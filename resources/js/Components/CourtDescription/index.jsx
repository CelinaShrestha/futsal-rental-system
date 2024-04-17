import React from "react";

function CourtDescription({futsal_listing}) {
    return (
        <div className="flex flex-col gap-5 mt-8">
            <div>
                <h2 className="font-semibold text-lg">Description</h2>
                <div className="p-8 my-2 bg-surface-color rounded-lg text-justify leading-7">
                    <p>{futsal_listing.long_description}</p>
                </div>
                {/* Other details of the futsal listing */}
            </div>
            <div>
                <h2 className="font-semibold text-lg">Facilities</h2>
                <div className="flex gap-2">
                    {futsal_listing.facilities.map((facility, index) => (
                        <div
                            key={index}
                            className=" p-4 my-2 bg-surface-color rounded-lg text-justify leading-7"
                        >
                            {facility}
                        </div>
                    ))}
                </div>
                {/* Other details of the futsal listing */}
            </div>
            <div>
                <h2 className="font-semibold text-lg">Contact Info</h2>
                <p>{futsal_listing.contactNumber}</p>
                {/* Other details of the futsal listing */}
            </div>
            <div>
                <h2 className="font-semibold text-lg">Location</h2>
                <p>*Map Integration*</p>
                {/* Other details of the futsal listing */}
            </div>
        </div>
    );
}

export default CourtDescription;
