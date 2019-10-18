const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

const name = 'crisis-info';

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.+(\/|\/install)$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: name + '-html',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /.+\.(js|css)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: name + '-assets',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /.+\.(png|jpg|svg)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: name + '-imgs',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withOffline(withSass(nextConfig));
