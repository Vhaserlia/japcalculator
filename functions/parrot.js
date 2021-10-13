exports.handler = async function(event, context) {
    const requestBody = JSON.parse(event.body);
    const message = requestBody.message;
    
    if (message != null){
        return  {
            statusCode: 200,
            body: JSON.stringify({message: message})
        };
    }
    return {
        statusCode: 400,
        body: JSON.stringify({message: "No message sent!"})
    };
  };