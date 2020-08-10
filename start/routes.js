'use strict'

const Route = use('Route')

// custumizar group
const addGroup = (group) => {
  group.prefix('api');
  return group;
}


// ruta v1
addGroup(Route.group(() => {


}));


