export default {
  validateName,
  create,  
};

function validateName(name) {
  if (name === '') {
    throw new TypeError("name must not be blank")
  }
}

function create(name) {
  const item = {
    id : cuid(),
    name: name,
    checked: false
  }
  return item;
}