const API_URL = '//localhost:3001/api/private'
const request = require('request')

const userAPI =()=>{
   
   
    const options = {
        url: API_URL,
        headers: {authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56ZERNVFZETnpBd01qTXpRVGMzT0RnM09EbERSa0V5TmpNMVF6SkVORGhHTWpFMlFUQXlNUSJ9'} 
    }

    const request = new Request(API_URL+'signin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({login: credentials})
      });

    request 
}

export default userAPI