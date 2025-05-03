// import React from "react";
// import Image from "next/image";
// import { ITeamDT } from "@/types/team-d-t";

// // prop type 
// type IProps = {
//   item:ITeamDT;
//   handleTeamModal(team: ITeamDT): void;
// }

// export default function TeamItem({ item,handleTeamModal }:IProps) {
//   return (
//     <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
//       <div className="tp-hover-btn-item">
//         <Image src={item.image} alt="team-img" width={375} height={464} />
//       </div>
//       <div className="tp-team-content">
//         <span style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.designation}</span>
//         <h4
//           className="tp-team-title-sm"
//           onClick={()=> handleTeamModal(item)}
//         >
//           <a href="#" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.name}</a>
//         </h4>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { ITeamDT } from "@/types/team-d-t";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
};

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div
      className="bg-white border border-gray-200 p-4 rounded-md text-center"
      // onClick={() => handleTeamModal(item)}
    >
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        {item.name}
      </h4>
      <p className="text-sm text-gray-600">{item.designation}</p>
    </div>
  );
}
