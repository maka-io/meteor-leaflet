Package.describe({
  name: "maka:leaflet",
  summary: "Just like bevanhunts, but trying to get rotation working.",
  git: "https://github.com/maka-io//meteor-leaflet.git",
  author: "Bevan Hunt <bevan@bevanhunt.com> (http://bevanhunt.com)",
  version: "3.1.3",
  license: "MIT"
});

Npm.depends({
  "leaflet": "1.2.0",
  "leaflet.markercluster": "1.0.2",
  "leaflet-providers": "1.1.16",
  "leaflet-spin": "1.1.0",
  "spin.js": "2.3.2",
  "leaflet-rotatedmarker": "0.2.0"
});

Package.onUse(function (api) {
  api.versionsFrom('1.5');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js',
    '.npm/package/node_modules/leaflet.markercluster/dist/MarkerCluster.css',
    '.npm/package/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
    '.npm/package/node_modules/spin.js/spin.js',
    '.npm/package/node_modules/leaflet-spin/leaflet.spin.js',
    '.npm/package/node_modules/leaflet-rotatedmarker/leaflet.rotatedMarker.js',
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
