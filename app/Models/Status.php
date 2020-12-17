<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/** @mixin Builder */
class Status extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class)
            ->select(['id', 'name']);
    }
}
