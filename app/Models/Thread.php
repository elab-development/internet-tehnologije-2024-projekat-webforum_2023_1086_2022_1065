<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory;

    // polja modela
    protected $fillable = [
        'title',
        'body',
        'user_id',
        'status'
    ];

    // u nastavku: veze tabela (eloquent konvencija)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
