import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const url = "http://localhost:8002/bots"
function BotsPage() {
  //use state to create the 2 armies; your army & bot collection, and the functions to update them
  const [botObject, setBotObject] = useState([])
  const [army, setArmy] = useState([])

//use effect to fetch data from the API
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => 
     
        setBotObject(data)
      
      )}, [])

  //add a bot to the army - checks if the bot is already on the army or not
function handleAddArmy(bot){
  if(army.includes(bot)) {
    return null
  } else {
    const newArmy = [...army, bot]
        setArmy(newArmy)
  }     
}

//remove a bot from the army when you click on it
function removeBotFromArmy(e) {
  const deleteArmy = army.filter((item) => {
  if(item.avatar_url !== e.target.src) {
    return item
  } 
}
     
  )
  setArmy(deleteArmy)
  
}
//delete a bot permanently even from the database
  function deletePerm(id){
    const updatedBots = botObject.filter(bot => bot.id !== id)
    setBotObject(updatedBots)
    const updatedBotsArmy = army.filter(bot => bot.id !== id)
    setArmy(updatedBotsArmy)   
    }


  return (
    <div>
      <YourBotArmy armyArray={army} handleAddArmy={handleAddArmy} 
      handleRemoval={removeBotFromArmy}
      deleteBot = {deletePerm}
      />
      <BotCollection collection={botObject} handleAddArmy={handleAddArmy} 
      deleteBot = {deletePerm}
      />
     
    </div>
  )
}

export default BotsPage;
