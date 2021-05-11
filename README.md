# Nevada

## How to Integrate
1. Copy this line into /routes/web.php
	`Route::view('/search', 'search');`
2.  copy file inside `/resources/views/search.blade.php`
3. copy file inside `/public/assets/js/search.js`

## How to Vue
1. run `composer require laravel/ui`
2. run `php artisan ui vue` for just installing Vue.
3. copy file inside `/resources/views/search.blade.php`
4. copy file inside `/resources/js/components/SearchComponent.vue`
5. copy file inside `/resources/js/app.js`
5. copy file inside `/webpack.mix.js`
6. run `npm install && npm run dev`