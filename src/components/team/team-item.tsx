import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";

// prop type 
type IProps = {
  item:ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item,handleTeamModal }:IProps) {
  return (
    <div className="tp-team-item marque fix bg-white border border-gray-200 p-4 rounded-md text-center">
      <div className="">
        
        <h4
          className=""
          // onClick={()=> handleTeamModal(item)}
        >
          <a href="#" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.name}</a>
        </h4>
        <span style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.designation}</span>
      </div>
    </div>
  );
}

// import React from "react";
// import { ITeamDT } from "@/types/team-d-t";

// // prop type 
// type IProps = {
//   item: ITeamDT;
//   handleTeamModal(team: ITeamDT): void;
// };

// export default function TeamItem({ item, handleTeamModal }: IProps) {
//   return (
//     <div
//       className="tp-team-item marque fix bg-white border border-gray-200 p-4 rounded-md text-center"
//       // onClick={() => handleTeamModal(item)}
//     >
//       <h4 className="text-lg font-semibold text-gray-800 mb-1">
//         {item.name}
//       </h4>
//       <p className="text-sm text-gray-600">{item.designation}</p>
//     </div>
//   );
// }
