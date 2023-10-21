console.log('SERVICE WORKER')
navigator.serviceWorker.register('./serviceWorkerApi.ts')

self.addEventListener('fetch', (event: any) => {
    event.respondWith(
        
        caches.match(event.request).then(function (response) {
            console.log('event fetch intercepted', event)

            if (response) {
                console.log('even')

                return response;
            } 

        })
      
    )
})

// self.addEventListener('fetch', function(event: any) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         // Si une réponse est trouvée en cache, la renvoyer immédiatement
//         if (response) {
//           return response;
//         }
  
//         // Sinon, envoyer la demande à partir du serveur et la mettre en cache pour une utilisation future
//         return fetch(event.request).then(function(response) {
//           var responseToCache = response.clone();
//           caches.open('my-cache').then(function(cache) {
//             cache.put(event.request, responseToCache);
//           });
  
//           return response;
//         });
//       })
//     );
//   });