import React from "react";
import { ITeamDT } from "@/types/team-d-t";

const TeamItem = ({ item, handleTeamModal }: { 
  item: ITeamDT; 
  handleTeamModal: (team: ITeamDT) => void 
}) => {
  return (
    <div 
      className="group relative overflow-hidden  transition-all duration-300 hover:shadow-md cursor-pointer"
      // onClick={() => handleTeamModal(item)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 absolute bottom-0 left-0 w-full translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white font-medium text-lg">{item.name}</h3>
        <p className="text-gray-300 text-sm">{item.designation}</p>
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 font-medium">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.designation}</p>
      </div>
    </div>
  );
};

export default TeamItem;

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
