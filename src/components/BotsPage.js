import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const url = "http://localhost:8002/bots"
function BotsPage() {
  //start here with your code for step one
  const [botObject, setBotObject] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => 
     
        setBotObject(data)
      
      )}, [])
function handleAddArmy(bot){
  if(army.includes(bot)) {
    return null
  } else {
    const newArmy = [...army, bot]
        setArmy(newArmy)
  }     
}
function removeBotFromArmy(e) {
  const deleteArmy = army.filter((item) => {
  if(item.avatar_url !== e.target.src) {
    return item
  } 
}
     
  )
  setArmy(deleteArmy)
  
}
function deleteBotPerm(id) {
  const updatedBots = botObject.filter(bot => bot.id !== id)
  setBotObject(updatedBots)
}

function deletePerm(bot){
  
  fetch(`${url}/${bot.id}`, {
    method: "DELETE"

  })
  deleteBotPerm(bot.id)  
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
