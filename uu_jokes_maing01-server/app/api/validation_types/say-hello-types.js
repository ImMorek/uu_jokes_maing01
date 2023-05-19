/* eslint-disable */

const sayHelloDtoInType = shape({
  name: string(2,255).isRequired()
});

const getHelloDtoInType = shape({
  name: string(2,255).isRequired()
});


const deleteHelloDtoInType = shape({
  id: id().isRequired()
});
