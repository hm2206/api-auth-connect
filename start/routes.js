'use strict'

const Route = use('Route')

// custumizar group
const addGroup = (group) => {
  group.prefix('api');
  return group;
}


// ruta v1
addGroup(Route.group(() => {

  // Ruta de Tramite
  Route.post('/tramite', 'TramiteController.store').middleware(['allow:TramiteController.store', 'jwt', 'entityId', 'dependenciaId']);

  // Ruta Publica de Tramite
  Route.post('/public/tramite', 'public/TramitePublicController.store').middleware(['allow:public/TramitePublicController.store']);
  Route.get('/public/tramite/:slug', 'public/TramitePublicController.show').middleware(['allow:public/TramitePublicController.show']);
  Route.get('/public/tramite/:slug/tracking', 'public/TramitePublicController.tracking').middleware(['allow:public/TramitePublicController.tracking']);

}));


