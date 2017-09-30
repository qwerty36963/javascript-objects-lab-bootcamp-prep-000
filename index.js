var recipes = {recipes}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({},object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key, value){
 object1 = Object.assign({},object, { [key]: value})
delete object1[key];
return object;
}
