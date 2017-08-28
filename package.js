Package.describe({
  name: "bevanhunt:leaflet",
  summary: "leaflet - mobile-friendly maps.",
  git: "https://github.com/bevanhunt/meteor-leaflet.git",
  author: "Bevan Hunt <bevan@bevanhunt.com> (http://bevanhunt.com)",
  version: "3.1.1",
  license: "MIT"
});

Npm.depends({
  "leaflet": "1.0.3",
  "leaflet.markercluster": "1.0.2",
  "leaflet-providers": "1.1.16",
  "leaflet-spin": "1.1.0",
  "spin.js": "2.3.2",
  "leaflet-rotatedmarker": "0.2.0"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js',
    '.npm/package/node_modules/leaflet.markercluster/dist/MarkerCluster.css',
    '.npm/package/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
    '.npm/package/node_modules/spin.js/spin.js',
    '.npm/package/node_modules/leaflet-spin/leaflet.spin.js',
    'styles/leaflet.css',
  ], 'client');
  api.addAssets([
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
