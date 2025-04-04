<?php

use craft\helpers\App;

$getTLS = explode('://', App::env('PRIMARY_SITE_URL'))[0];

return [
    'checkDevServer' => true,
    'devServerInternal' => $getTLS . '://localhost:5173',
    'devServerPublic' => $getTLS . '://localhost:5173',
    'errorEntry' => 'src/js/app.js',
    'manifestPath' => Craft::getAlias('@webroot') . '/build/manifest.json',
    'serverPublic' => Craft::getAlias('@web')  . '/build/',
    'useDevServer' => (bool) App::env('VITE_USE_DEV_SERVER'),
];