const GETUSERID = (email, pass) => String.raw`SELECT Id FROM Users WHERE Email = ${email} AND Password = ${pass}`
const ADDUSER = (username, email, pass) => String.raw`INSERT INTO Users (Username, Email, Password) VALUES (${username}, ${email}, ${pass})`
const GETUSER = (id) => String.raw`SELECT * FROM Users WHERE Id = ${id}`

const SAVEUSER = (id, username, email, pass) => String.raw`UPDATE Users 
SET Username = ${username}, Email = ${email}, Password = ${pass}
WHERE Id = ${id}`



exports.handlePostRequest = (path, bodyData) => {
  switch (path) {
    case '/login': // login
      return GETUSERID(bodyData.Email, bodyData.Password);
    case '/user/create': // create a user
      return ADDUSER(bodyData.Username, bodyData.Email, bodyData.Password);
    case '/user': // (user/id) saves changes to user info
      return SAVEUSER(bodyData.Id, bodyData.Username, bodyData.Email, bodyData.Password);
    case '/recipes/add': // adds a new recipe in db
      return;
  }
}

exports.handleGetRequest = (path, bodyData) => {
  switch (path) {
    case '/user': // (user/id) gets info about a user by id (id in body)
      return GETUSER(bodyData.Id);
    case '/fridge/categories': // list with category names (and pictures)
      return;
    case '/fridge/ingredients': // list of ingredient names (and images) from a category
      return;
    case '/recipes/get': // simple list with recipe title and image, filter info in body
      return;
    case '/recipes/get': // all info about a recipe (recipe id in body) (recipes/get/id)
      return;
    case '/favs': // simple list with recipe title and image, filtered by isFav field and userId
      return;
  }
}

// exports.handleQuery = (data) => {

// }

// returns the result of a query
exports.queryResult = async (query, con) => {
  return new Promise((resolve, reject) => {
    con.query(query, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  }).catch(error => {
    console.log('missing function for handle error')
  })
}
