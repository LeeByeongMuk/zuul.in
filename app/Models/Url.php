<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Url extends Model
{
    use HasFactory, SoftDeletes;

    /* The table associated with the model. */
    protected $table = 'url';

    /* The model's default values for attributes. */
    protected $attributes = [
        'today' => 0,
        'total' => 0,
    ];

    /* The attributes that are mass assignable. */
    protected $fillable = ['name', 'url', 'ip'];
}
