<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('bookables', 'Api\BookableController');

//Route::get('bookables', 'Api\BookableController@index');
//Route::get('bookables/{id}', 'Api\BookableController@show');

//Route::get('bookables/{id}', function (Request $request, $id) {
//    return Bookable::findOrFail($id);
//});
//Route::get('bookables', function (Request $request, $id) {
//    return Bookable::all();
//});
