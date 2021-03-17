<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @if(env('APP_ENV') == 'production')
        <!-- Google Tag Manager -->
        <script>
            (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);

                    setTimeout(function(){
                        location.href = '{{ $origin }}';
                    }, 1000);
            })(window,document,'script','dataLayer','GTM-W8QJVTF');
        </script>
        <!-- End Google Tag Manager -->
        @else
        <script>
            setTimeout(function(){
                location.href = '{{ $origin }}';
            }, 1000);
        </script>
        @endif

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>{{ config('app.name') }}</title>
    </head>
    <body>
        @if(env('APP_ENV') == 'production')
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8QJVTF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        @endif
    </body>
</html>
