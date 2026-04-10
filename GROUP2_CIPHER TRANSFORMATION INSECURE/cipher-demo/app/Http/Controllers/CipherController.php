<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class CipherController extends Controller
{
    public function index()
    {
        return view('cipher');
    }

    // 🔴 VULNERABLE VERSION 
    public function encryptInsecure(Request $request)
    {
        $data = $request->input('message');

        
        $encrypted = base64_encode($data);

        return view('result', ['encrypted' => $encrypted]);
    }

    // ATTACK SIMULATION 
    public function attack($data)
    {
        $decoded = base64_decode($data);

        return "HACKED DATA: " . $decoded;
    }

    // SECURE VERSION
    public function encrypt(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $data = $request->input('message');

        // REAL ENCRYPTION
        $encrypted = Crypt::encryptString($data);

        return view('result', ['encrypted' => $encrypted]);
    }

    // OPTIONAL: SECURE DECRYPT
    public function decrypt($data)
    {
        try {
            $decrypted = Crypt::decryptString($data);
            return "Decrypted Data: " . $decrypted;
        } catch (\Exception $e) {
            return "Decryption failed!";
        }
    }
}