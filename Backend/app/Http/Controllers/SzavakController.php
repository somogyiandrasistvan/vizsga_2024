<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function index()
    {
        $szavak = DB::table("szavaks")->select("id", "angol", "magyar", "temaId")->get();
        return $szavak;
    }

    public function szavak_tema()
    {
        $szavak_tema = response()->json(Szavak::with('tema')->get());
        return $szavak_tema;
    }

    public function szavak($id)
    {
        $szavak = DB::table("szavaks")->where("temaId", "=", $id)->select("id", "angol", "magyar", "temaId")->get();
        return $szavak;
    }
}
