'use strict'

const Route = use('Route')

// customizar group
const addGroup = (group) => {
  group.prefix('api')
  return group;
}


// ruta autorizada
addGroup(Route.group(() => { 
  
  // Certificados
  Route.post('certificate', 'CertificateController.store').middleware(['jwt']);
  Route.post('certificate/:id/download', 'CertificateController.download').middleware(['jwt']);

  // Signer
  Route.post('signer/:id', 'SignerController.signer').middleware(['jwt']);

}));



