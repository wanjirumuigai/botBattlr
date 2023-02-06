import React, {useState, useEffect}from "react";
import BotCard from "./BotCard";

const url = "http://localhost:8002/bots"
function BotCollection({collection, handleAddArmy,deleteBot}) {

  
  return (
    <div className="ui four column grid">
      <div className="row">
      
      {collection.map ((item) => {
          return (
            <BotCard bot={item} 
            addArmy={handleAddArmy} 
            deleteBot={deleteBot} />
          )
        })}
       
        
      </div>
      
    </div>
  );
}

export default BotCollection;
