<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Styles -->
        <link href="https://fonts.googleapis.com/css?family=Modak" rel="stylesheet">
        <link href="{{ asset('temp.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="title">
            <div class="text text-1">F</div>
            <div class="text text-2">F</div>
            <div class="text text-3">F</div>
            <div class="text text-4">F</div>
        </div>

        <form action="" class="form">
            <input type="text" name="url" class="input input-text" placeholder="Link">
            <input type="submit" class="input input-submit" value="Shorten">
        </form>
    </body>
</html>
