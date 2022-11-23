import { useEffect, useState } from 'react';
import React from 'react';
import http from '../lib/http';
import ListGroup from 'react-bootstrap/ListGroup';
function Tokens(){
    const [token, setToken] = useState({});
    /* useEffect(() => {
        async function fetchData() {
          const { data } = await http.get(`/token`);
          setToken(data.token);  
        }
        fetchData();
        console.log(token)
      }, []); */
      useEffect(() => {
        async function fetchData() {
         const { data } = await http.get('/token')
         setToken(data.data.token);
       
       }
       fetchData();
     }, []);
     console.log(token)
     if(token){
        return <p>Success. You can press f12 for your results</p>;
      } else{
    return(
        <div>
            {
            token.map((tokens) => {
              return (
                <ListGroup.Item key={tokens._id}> 
                  <div>{tokens.token}</div>
                </ListGroup.Item>
              );
            })
          }
        </div>
    )
}
}

export default Tokens;