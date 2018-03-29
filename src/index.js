const getVal =  (path, object)  => {
  if (!Array.isArray(path) || !path.length) {
    return new Error('The path entered is incorrect');
  }
  return ( object === undefined )
  ?  (object) => path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, object) 
  : path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, object)  
}

module.exports = getVal