// import React from "react";
// import { useState } from "react";
// import { Transition } from "@headlessui/react";

// const FutsalImage = ({ images }) => {
//     const [currentImage, setCurrentImage] = useState(0);

//     const nextImage = () => {
//         setCurrentImage((currentImage + 1) % images.length);
//     };

//     const prevImage = () => {
//         setCurrentImage((currentImage - 1 + images.length) % images.length);
//     };

//     return (
//         <div className="relative">
//             <div className="overflow-hidden h-64 sm:h-80 md:h-96 lg:h-120">
//                 {images.map((image, index) => (
//                     <Transition
//                         key={index}
//                         show={index === currentImage}
//                         enter="transition-opacity duration-500"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="transition-opacity duration-500"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                         className="absolute inset-0"
//                     >
//                         <img
//                             src={image}
//                             alt={`Image ${index + 1}`}
//                             className="w-full h-full object-cover"
//                         />
//                     </Transition>
//                 ))}
//             </div>
//             <button
//                 onClick={prevImage}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
//             >
//                 {"<"}
//             </button>
//             <button
//                 onClick={nextImage}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
//             >
//                 {">"}
//             </button>
//         </div>
//     );
// };

// export default FutsalImage;
