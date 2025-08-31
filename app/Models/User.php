<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     *  laravel automatski generisao ovo
     *  opis promenljive za staticku analizu
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * 
     * sakriveni atributi prilikom serijalizacije
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // casts property
    protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
];

    /**
     * Veza: User ima vise Thread-ova
     */
    public function threads()
    {
        return $this->hasMany(Thread::class);
    }

    /**
     * Veza: User ima vise Comment-ova
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
