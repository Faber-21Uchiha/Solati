<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use App\Models\Usuario;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'prueba',
            'email' => 'prueba@prueba.com',
            'password' => bcrypt('prueba123'),

        ]);
        // Seed for Students
        Student::factory(10)->create();
    }
}
