import React, {useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyArray, handleAddArmy, handleRemoval}) {
  
  
  //your bot army code here...
function deleteArmy(e){
   handleRemoval(e)
  
}

  return (
    <div className="ui segment inverted olive bot-army" onClick={(e) => deleteArmy(e)}>
      <div className="ui five column grid">
        <div className="row bot-army-row" >
          {/*...and here...*/}
          {armyArray.map((item) => {
            return (
              <BotCard bot={item} addArmy={handleAddArmy} />
            )
          }          
          )}          
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
