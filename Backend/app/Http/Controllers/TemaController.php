<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TemaController extends Controller
{
    public function index()
    {
        $tema = DB::table("temas")->select("id", "temanev")->get();
        return $tema;
    }
}
