<?php

namespace App\Http\Controllers;

use App\DAO\UsuarioDAO;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\Response;


class UsuarioController extends Controller
{
    private $usuarioDAO;

    public function __construct()
    {
        $this->usuarioDAO = UsuarioDAO::getInstance();
    }

    /**
     * Mostrar una lista de los usuarios.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $usuarios = $this->usuarioDAO->getAll();
        // dd($usuarios); // Verificar que los datos se están pasando al controlador
        return Inertia::render('Usuarios/Index', [
            'usuarios' => $usuarios,
            'auth' => [
                'user' => auth()->user(),
            ],
        ]);

        // return response()->json([
        //     'success' => true,
        //     'data' => $usuarios
        // ], Response::HTTP_OK);
    }

    public function create()
    {
        return Inertia::render('Usuarios/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'edad' => 'required|integer',
            'correo' => 'required|email|unique:usuarios',
        ]);

        $this->usuarioDAO->create($request->all());

        return Redirect::route('usuarios.index')->with('success', 'Usuario creado exitosamente.');
    }

    public function show($id)
    {
        $usuario = $this->usuarioDAO->getById($id);
        return Inertia::render('Usuarios/Show', [
            'usuario' => $usuario,
        ]);
    }

    public function edit($id)
    {
        $usuario = $this->usuarioDAO->getById($id);
        return Inertia::render('Usuarios/Edit', [
            'usuario' => $usuario,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'edad' => 'required|integer',
            'correo' => 'required|email|unique:usuarios,correo,' . $id,
        ]);

        $this->usuarioDAO->update($id, $request->all());

        return redirect()->route('usuarios.show', $id)->with('success', 'Usuario actualizado exitosamente.');

        //     try {
        //         $usuario = $this->usuarioDAO->update($id, $request->all());
        //         if ($usuario) {
        //             return response()->json([
        //                 'success' => true,
        //                 'data' => $usuario,
        //                 'message' => 'Usuario actualizado exitosamente.'
        //             ], Response::HTTP_OK);
        //         }

        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Usuario no encontrado.'
        //         ], Response::HTTP_NOT_FOUND);
        //     } catch (\Exception $e) {
        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Error al actualizar el usuario: ' . $e->getMessage()
        //         ], Response::HTTP_BAD_REQUEST);
        //     }
        // }
    }


    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();

        return redirect()->route('usuarios.index')->with('success', 'Usuario eliminado exitosamente.');
        //     try {
        //         $success = $this->usuarioDAO->delete($id);
        //         if ($success) {
        //             return response()->json([
        //                 'success' => true,
        //                 'message' => 'Usuario eliminado exitosamente.'
        //             ], Response::HTTP_NO_CONTENT);
        //         }

        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Usuario no encontrado.'
        //         ], Response::HTTP_NOT_FOUND);
        //     } catch (\Exception $e) {
        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Error al eliminar el usuario: ' . $e->getMessage()
        //         ], Response::HTTP_BAD_REQUEST);
        //     }
        // }
    }
}
