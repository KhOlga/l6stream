<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('statuses', 'StatusController@index');
Route::post('statuses', 'StatusController@store');
