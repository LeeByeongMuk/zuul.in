<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Google Tag Manager -->

        @if(env('APP_ENV') == 'production')
        <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8QJVTF');
        </script>
        @endif
        <!-- End Google Tag Manager -->

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>{{ config('app.name') }}</title>

        <!-- Styles -->
        <link href="https://fonts.googleapis.com/css?family=Modak" rel="stylesheet">
        <link href="{{ asset('temp.css') }}" rel="stylesheet">
    </head>
    <body>
        @if(env('APP_ENV') == 'production')
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8QJVTF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        @endif

        <div class="app"></div>

        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
