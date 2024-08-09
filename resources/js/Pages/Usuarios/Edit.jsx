import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const Edit = ({ usuario, auth }) => {
    const { data, setData, put, processing, errors } = useForm({
        nombre: usuario.nombre || '',
        edad: usuario.edad || '',
        correo: usuario.correo || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('usuarios.update', usuario.id), {
            data: data, // Asegúrate de pasar los datos del formulario
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Usuario</h2>}
        >
            <Head title="Editar Usuario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
                                    <input
                                        type="number"
                                        id="edad"
                                        name="edad"
                                        value={data.edad}
                                        onChange={(e) => setData('edad', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                    {errors.edad && <p className="text-red-500 text-xs mt-1">{errors.edad}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                                    <input
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        value={data.correo}
                                        onChange={(e) => setData('correo', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                                    />
                                    {errors.correo && <p className="text-red-500 text-xs mt-1">{errors.correo}</p>}
                                </div>

                                <div className="mt-6 flex gap-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Actualizar
                                    </button>

                                    <Link href={`/usuarios/${usuario.id}`} className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md">
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
