
import BotCard from "./BotCard";


function BotCollection({collection, handleAddArmy,deleteBot}) {
  
  
  return (
    <div className="ui four column grid">
      <div className="row">
      {/* iterate thru the bot collection and pass the props to the BotCard component */}
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
