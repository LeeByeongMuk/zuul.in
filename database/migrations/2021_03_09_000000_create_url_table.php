<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUrlTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('url', function (Blueprint $table) {
            $table->id();
            $table->string('name', 8)->unique()->comment('단축 URL');
            $table->string('origin')->comment('원본 URL');
            $table->string('ip', 15)->nullable()->comment('생성한 아이피');
            $table->integer('today')->comment('오늘 방문자');
            $table->integer('total')->comment('누적 방문자');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('url');
    }
}
