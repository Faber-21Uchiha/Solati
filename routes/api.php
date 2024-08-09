<?php

// use App\Http\Controllers\studentController;

use App\Http\Controllers\studentController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
// Route::get('/usuario', function () {
//     return 'listar estudiantes';
// });
// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::get('/usuario', function () {
//         return 'listar estudiantes';
//     });
// });
// Route::middleware(['auth', 'verified'])->group(function () {
Route::get('/students', [studentController::class, 'index']);
Route::get('/students/{id}', [studentController::class, 'show']);
Route::post('/students', [studentController::class, 'store']);
Route::put('/students/{id}', [studentController::class, 'update']);
Route::patch('/students/{id}', [studentController::class, 'updatePartial']);
Route::delete('/students/{id}', [studentController::class, 'destroy']);
// });
// Route::prefix('usuarios')->group(function () {
//     Route::get('/', [UsuarioController::class, 'index']);
//     Route::get('{id}', [UsuarioController::class, 'show']);
//     Route::post('/', [UsuarioController::class, 'store']);
//     Route::put('{id}', [UsuarioController::class, 'update']);
//     Route::delete('{id}', [UsuarioController::class, 'destroy']);
// });
