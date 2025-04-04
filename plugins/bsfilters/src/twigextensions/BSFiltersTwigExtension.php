<?php
/**
 * BSFilters plugin for Craft CMS 3.x
 *
 * Bluestorm - Filters
 *
 * @link      https://bluestormdesign.co.uk
 * @copyright Copyright (c) 2022 Bluestorm Design
 */

namespace bluestorm\bsfilters\twigextensions;

use bluestorm\bsfilters\BSFilters;

use Craft;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Bluestorm Design
 * @package   BSFilters
 * @since     1.0.0
 */
class BSFiltersTwigExtension extends AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'BSFilters';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            new TwigFilter('checkFile', [$this, 'checkFileFunction']),
        ];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
     * @return array
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('someFunction', [$this, 'someInternalFunction']),
        ];
    }

    public function checkFileFunction($imagePath = null)
    {
        return file_exists(CRAFT_BASE_PATH . '/public/' . $imagePath);
    }
}
