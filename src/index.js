const getVal =  (path, object)  => {
  if (!Array.isArray(path) || path.length===0) {
    console.warn('The path entered is incorrect');
    return null;
  }
  return ( object === undefined )
  ?  (object) => path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, object) 
  : path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, object); 
}

module.exports = getVal;