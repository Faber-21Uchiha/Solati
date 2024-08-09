// resources/js/Pages/Usuarios/Show.jsx
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const Show = ({ usuario, auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detalles del Usuario</h2>}
        >
            <Head title={`Detalles del Usuario - ${usuario.nombre}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-900">Nombre</h3>
                                <p className="mt-1 text-sm text-gray-600">{(usuario.nombre)}</p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-900">Edad</h3>
                                <p className="mt-1 text-sm text-gray-600">{usuario.edad}</p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-900">Correo</h3>
                                <p className="mt-1 text-sm text-gray-600">{(usuario.correo)}</p>
                            </div>

                            <div className="mt-6">
                                <Link href= {`/usuarios/${usuario.id}/edit`} className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
                                    Editar Usuario
                                </Link>

                                <Link href={route('usuarios.index')}  className="ml-4 inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md">
                                    Volver a la lista
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
