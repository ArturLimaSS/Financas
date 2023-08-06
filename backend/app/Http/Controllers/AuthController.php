<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token-name')->plainTextToken;
            return response()->json(['message' => 'Login Realizado com Sucesso!', 'text' => 'Você será redirecionado!', 'status' => 'success', 'token' => $token], 200);
        }

        return response()->json(['message' => 'Usuário não autorizado!', 'text' => 'Verifique suas credenciais ou entre em contato com o nosso suporte!',  'status' => 'error']);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Logout feito com sucesso!'], 200);
    }
}