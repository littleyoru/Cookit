
export function login (data) {
  return fetch('http://127.0.0.1:3000/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => {
    console.log('response from server ', json)
    return json;
    // this.props.navigation.navigate('MyFridgeScreen');
  })
  .catch(error => console.log('error ', error));
}