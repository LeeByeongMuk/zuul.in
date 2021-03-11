<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');

/* 유지보수, 관리의 편의를 위해 api route로 분리하지 않았음 */
Route::post('store', [HomeController::class, 'store']);

Route::get('{name}', [HomeController::class, 'show'])->where('name', '[a-z0-9]{6}');
