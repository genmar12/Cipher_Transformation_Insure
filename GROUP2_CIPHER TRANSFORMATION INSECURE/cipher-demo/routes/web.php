<?php

use App\Http\Controllers\CipherController;

Route::get('/', [CipherController::class, 'index']);

// 🔴 insecure
Route::post('/encrypt-insecure', [CipherController::class, 'encryptInsecure']);
Route::get('/attack/{data}', [CipherController::class, 'attack']);

// 🟢 secure
Route::post('/encrypt-secure', [CipherController::class, 'encrypt']);
Route::get('/decrypt/{data}', [CipherController::class, 'decrypt']);