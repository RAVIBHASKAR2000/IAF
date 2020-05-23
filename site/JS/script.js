var commandsicon = document.querySelectorAll('.commands');
var time =0;
console.log(commandsicon)


for (let index = 0; index < commandsicon.length; index++) {  

        commandsicon[index].addEventListener("mouseover",changeicon);

        function changeicon(event){
            clearTimeout(time);
            event.target.style.cursor= "pointer"
            event.target.style.transform = "scale(1.5)";
           var flag =index;
           document.querySelector(".infocommand").style.visibility="visible";
             ajaxrequestfunction(flag);

            }

        commandsicon[index].addEventListener("mouseleave",rechangeicon);

        function rechangeicon(event){
            event.target.style.transform= "scale(1)";
            time= setTimeout(function(){ 
                document.querySelector(".infocommand").style.visibility="hidden";

             }, 1500);
            
        }
    

        function ajaxrequestfunction(flag){

            $ajaxUtils.sendGetRequest("Command.json",
            function(res){
                switch (flag) {
                    case 0: flag='WAC';
                            break;
                    case 1: flag='CAC';
                            break;
                    case 2: flag='EAC';
                            break;
                    case 3: flag='SWAC';
                            break;
                    case 4: flag='MC';
                            break;
                    case 5: flag='TC';
                            break;
                    case 6: flag='SAC';
                            break;
                
                    default:
                        break;
                }
                console.log(flag)
                console.log(res[flag]);
               
                document.querySelector(".infocommand").textContent=res[flag];

             })
     
       }

}









document.addEventListener("DOMContentLoaded",
function(event){


    document.querySelector(".commands").addEventListener("mouseover",function(){
        $ajaxUtils.sendGetRequest("Command.json",
        function(res){
           var message= res.firstName+" "+ res.lastName ;
           if(res.likesChineseFood){
               message+="likes chinese food";
           }
           else{
               message+= "doesnt like chinese food";
           }

           message+= "and uses";
           message+= res.numberOfDisplays;
           message+= "displays for coding";

           document.querySelector("#content")
           .innerHTML="<h2>"+message+"</h2>"
        })
    })
}

) 
