url ="https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";

async function deleteRow(id) {
    try{
        let res=await fetch (`${url}/${id}`,{
            "method" : "DELETE"
        });
    }catch(error){
        console.log(error);
    }
}  
