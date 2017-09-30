var recipes = {recipes}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
return object.assign({},object,{[key]: value})
}
