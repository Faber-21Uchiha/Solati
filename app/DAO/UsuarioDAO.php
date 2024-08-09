<?php

namespace App\DAO;

use App\Models\Usuario;
use Exception;

class UsuarioDAO
{
    private static $instance = null;

    // Método para obtener la instancia única del DAO
    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new UsuarioDAO();
        }
        return self::$instance;
    }

    // Método para obtener todos los usuarios
    public function getAll()
    {
        try {
            $usuarios = Usuario::all();
            return $usuarios;
        } catch (Exception $e) {
            // Manejo de errores: puedes registrar el error o lanzar una excepción
            throw new Exception('Error al obtener usuarios: ' . $e->getMessage());
        }
    }

    // Método para obtener un usuario por su ID
    public function getById($id)
    {
        try {
            $usuario = Usuario::find($id);
            if (!$usuario) {
                throw new Exception('Usuario no encontrado');
            }
            return $usuario;
        } catch (Exception $e) {
            throw new Exception('Error al obtener usuario: ' . $e->getMessage());
        }
    }

    // Método para crear un nuevo usuario
    public function create($data)
    {
        try {
            $usuario = Usuario::create($data);
            return $usuario;
        } catch (Exception $e) {
            throw new Exception('Error al crear usuario: ' . $e->getMessage());
        }
    }

    // Método para actualizar un usuario existente
    public function update($id, $data)
    {
        try {
            $usuario = Usuario::find($id);
            if (!$usuario) {
                throw new Exception('Usuario no encontrado');
            }
            $usuario->update($data);
            return $usuario;
        } catch (Exception $e) {
            throw new Exception('Error al actualizar usuario: ' . $e->getMessage());
        }
    }

    // Método para eliminar un usuario
    public function delete($id)
    {
        try {
            $usuario = Usuario::find($id);
            if (!$usuario) {
                throw new Exception('Usuario no encontrado');
            }
            $usuario->delete();
            return true;
        } catch (Exception $e) {
            throw new Exception('Error al eliminar usuario: ' . $e->getMessage());
        }
    }
}
