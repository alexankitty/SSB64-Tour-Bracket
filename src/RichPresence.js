const RPC = require("discord-rpc");
const rpj = new RPC.Client({
    transport: "ipc"
  });
  
  
  rpc.on("ready", () => {
    rpc.setActivity({
      details: "In Progress: Grand Final test",
      state: "Red Robin set",
      startTimestamp: new Date(),
      largeImageKey: "large_image",
      largeImageText: "Smash Bros Tournament",
      smallImageKey: "",
      smallImageText: "fight"
    });
    console.log("rich presence is in progress.")
  });
  
  rpc.login({
    clientId: "795229448332509184"
  });

  ///<img src="../assets/circle.png" width="40" height="40">
  //<div style="background-image: url(../assets/circle.png); height: 150px; width: 350px;"> </div>

  //$("#circle").animate({left: '75px'}, { queue: false, duration: 3000});

  //$("button").click(function(){
  //  $("#circle").animate({top: '+=65px'}, { queue: false, duration: 3000});