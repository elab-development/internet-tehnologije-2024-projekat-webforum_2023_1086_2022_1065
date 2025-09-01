<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    /**
     * Koja polja mogu da se masovno upisuju
     */
    protected $fillable = [
        'body',
        'user_id',
        'thread_id',
    ];

    /**
     * Veza: Comment pripada User-u (autor komentara)
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Veza: Comment pripada Thread-u
     */
    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }
}