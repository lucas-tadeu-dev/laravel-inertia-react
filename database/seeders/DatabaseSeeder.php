<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Shop;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Post::factory(1)->create();

        Shop::factory(1)->create();
    }
}
