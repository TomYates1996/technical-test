<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

$isLocalCopy = in_array('test', explode('.', App::env('PRIMARY_SITE_URL')));

return GeneralConfig::create()
    ->cpTrigger('bscp')
    ->devMode((App::env('CRAFT_ENVIRONMENT') == 'dev'))
    ->defaultWeekStartDay(1)
    ->omitScriptNameInUrls()
    ->preloadSingles()
    ->preventUserEnumeration(true)
    ->enableCsrfProtection(true)
    ->sendPoweredByHeader(false)
    ->postCpLoginRedirect('entries')
    ->allowAdminChanges($isLocalCopy ?? false)
    ->disallowRobots((App::env('CRAFT_ENVIRONMENT') == 'dev'))
    ->enableTemplateCaching(!(App::env('CRAFT_ENVIRONMENT') == 'dev'))
    ->maxUploadFileSize(41943040) // 40 MB
    ->phpMaxMemoryLimit('512M')
    ->aliases([
        '@webroot' => dirname(__DIR__) . '/public'
    ]);
