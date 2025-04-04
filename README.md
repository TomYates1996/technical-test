# Project setup

## Database
You can find the database dump you'll need to import in the root of the project - db_dump.sql.bz2

## .env file
Duplicate .env.example into .env file, everything is ready as long as you gave your DB "technical-test" name

Make sure website runs with an SSL - this needs to be done in order for Vite to compile Tailwind classes and JS into CSS

## Composer
Make sure you're on composer 2. Run "composer install" to install all packages.

## Node.js
Make sure you're on node version 22. Run "npm install"

## CMS
You can access the back-end of the cms by visiting the URL of the website /bscp. For example technical-test.test/bscp You can log-in with the following credentials - username: bluestorm | password: password

That's it, the website should now load up without any problems.

### Tips and documentation

Variable "entry" -> {{ entry }} is always available to you and it references the current page you're on, from there you have access to 
field assigned to that entry - all handles you see in the CMS for that entry are available.

Overall documentation - https://craftcms.com/docs/5.x/
Element queries - https://craftcms.com/docs/5.x/development/element-queries.html
Matrix fields - https://craftcms.com/docs/5.x/reference/field-types/matrix.html

If you have any questions, feel free to email either Denis or Ben at denis.mekina@bluestormdesign.co.uk or ben.gibson@bluestormdesign.co.uk

Visuals can be found here - https://www.figma.com/design/EkWoOFVPzZVsCM8M0RuxuT/Interview-Dev-Task?m=auto&t=2rUwspd7LxkLqVHU-1