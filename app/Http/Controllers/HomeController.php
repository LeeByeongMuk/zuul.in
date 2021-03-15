<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Faker\Generator as Faker;

class HomeController extends Controller
{
    /**
     * 원본 URL 저장 후 단축 URL 전달
     *
     * @param Request $request
     * @param Faker $faker
     * @return JsonResponse
     */
    public function store(Request $request, Faker $faker): JsonResponse
    {
        $url = Url::create([
            'name' => $faker->unique()->regexify('[a-z0-9]{6}'),
            'origin' => $request->url,
            'ip' => $request->ip(),
        ]);

        return response()->json(['name' => $url->name]);
    }

    /**
     * 단축 URL 조회 후 원본 URL로 전달
     *
     * @param $name
     * @return View
     */
    public function show($name): View
    {
        $url = Url::where('name', $name)->first();

        /* route에서 직접 redirect 하지 않고 GA 실행 후 이동 */
        return view('redirect', ['origin' => $url->origin]);
    }
}
