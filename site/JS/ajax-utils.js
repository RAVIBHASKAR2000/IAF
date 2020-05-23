(function(global){

    ajaxUtils={};

    function getRequestObject(){
        if(global.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else{
            global.alert("NOT suported");
            return (null);
        }
        
    }

   ajaxUtils.sendGetRequest=
    function(requestUrl,responseHandler,isJsonResponse){
         var request=getRequestObject();
         request.onreadystatechange=function(){
           handleResponse(request,responseHandler,isJsonResponse)
       };

       request.open("GET",requestUrl,true);
       request.send(null);
       
   }
function handleResponse(request,responseHandler,isJsonResponse){
    if((request.status==200)&&(request.readyState==4))
    {
      if(isJsonResponse==undefined){
          isJsonResponse=true;
      }
      if(isJsonResponse){
          responseHandler(JSON.parse(request.responseText));
      }
      else
        {    
        responseHandler(request.responseText);
        }
    }
}


global.$ajaxUtils=ajaxUtils;

})(window)