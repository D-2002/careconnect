import React, { useState } from 'react';
import { thirdweb } from '../assets';
import { tagType } from '../assets';
import { daysLeft } from '../utils';
import {loader} from '../assets';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline)<=0?0:daysLeft(deadline);
  console.log('------------>')
  // console.log(new Date(Date.now()).getDay())
  console.log(remainingDays);
  const [active,setActive]=useState(remainingDays<=0?false:true);
  // if(remainingDays<=0) setActive(false);
  
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" 
    
    onClick={handleClick}>
      <img src={photo2} alt="fund" className="w-full h-[158px] object-cover  rounded-[15px]"/>

      <div className="flex flex-col p-4 bg-white border-2">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={photo1} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">{active?"open":"closed"}</p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          {/* <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#008080]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p> */}
        </div>
      </div>
    </div>
  )
}

export default FundCard

// import React from 'react';
// import FundCard from './FundCard'; // Assuming the path to FundCard component is correct
// import Photo1 from '../assets/photo1.jpg';
// import Photo2 from '../assets/photo2.jpg';

// const ParentComponent = () => {
//   // Define data for each card with unique photo URLs
//   const cardData = [
//     {
//       owner: 'Owner 1',
//       title: 'Campaign 1',
//       description: 'Description for Campaign 1',
//       target: '$1000',
//       deadline: '2024-03-25', // Example deadline
//       amountCollected: '$500',
//       image1: Photo1, // Unique image URL for card 1
//       image2: Photo2, // Unique image URL for tag in card 1
//     },
//     // Add more objects for other cards as needed
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {cardData.map((data, index) => (
//         <FundCard
//           key={index}
//           owner={data.owner}
//           title={data.title}
//           description={data.description}
//           target={data.target}
//           deadline={data.deadline}
//           amountCollected={data.amountCollected}
//           image={data.image1} // Pass main image URL
//           tagImage={data.image2} // Pass tag image URL
//           handleClick={() => {/* Handle click event if needed */}}
//         />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;


// // import React from 'react';
// // import FundCard from './FundCard'; // Assuming the path to FundCard component is correct
// // import Photo1 from '../assets/photo1.jpg';
// // import Photo2 from '../assets/photo2.jpg';
// // import Photo3 from '../assets/photo3.jpg';
// // import Photo4 from '../assets/photo4.jpg';

// // const ParentComponent = () => {
// //   // Define data for each card
// //   const cardData = [
// //     {
// //       owner: 'Owner 1',
// //       title: 'Campaign 1',
// //       description: 'Description for Campaign 1',
// //       target: '$1000',
// //       deadline: '2024-03-25', // Example deadline
// //       amountCollected: '$500',
// //       image: Photo1 // Unique image URL for card 1
// //     },
// //     {
// //       owner: 'Owner 2',
// //       title: 'Campaign 2',
// //       description: 'Description for Campaign 2',
// //       target: '$1500',
// //       deadline: '2024-03-28', // Example deadline
// //       amountCollected: '$800',
// //       image: Photo2 // Unique image URL for card 2
// //     },
// //     {
// //       owner: 'Owner 3',
// //       title: 'Campaign 3',
// //       description: 'Description for Campaign 3',
// //       target: '$2000',
// //       deadline: '2024-04-02', // Example deadline
// //       amountCollected: '$1200',
// //       image: Photo3 // Unique image URL for card 3
// //     },
// //     {
// //       owner: 'Owner 4',
// //       title: 'Campaign 4',
// //       description: 'Description for Campaign 4',
// //       target: '$2500',
// //       deadline: '2024-04-05', // Example deadline
// //       amountCollected: '$1800',
// //       image: Photo4 // Unique image URL for card 4
// //     }
// //   ];

// //   return (
// //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //       {cardData.map((data, index) => (
// //         <FundCard
// //           key={index}
// //           owner={data.owner}
// //           title={data.title}
// //           description={data.description}
// //           target={data.target}
// //           deadline={data.deadline}
// //           amountCollected={data.amountCollected}
// //           image={data.image}
// //           handleClick={() => {/* Handle click event if needed */}}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default ParentComponent;

