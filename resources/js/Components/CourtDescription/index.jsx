import React from "react";
import Map from "../Map";

function CourtDescription({ futsal_listing }) {
    return (
        <div className="flex flex-col gap-5 mt-8">
            <div>
                <h2 className="font-semibold text-lg">Description</h2>
                <div className=" text-justify leading-9">
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
                <p className="text-justify leading-9">
                    Address : {futsal_listing.location}
                    <br />
                    Contact Number : {futsal_listing.contactNumber}
                </p>
                {/* Other details of the futsal listing */}
            </div>
            <div className="mb-12">
                <h2 className="font-semibold text-lg mb-4">Location</h2>
                <Map futsal_listing={futsal_listing} />
                {/* Other details of the futsal listing */}
            </div>
        </div>
    );
}

export default CourtDescription;
