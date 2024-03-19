import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="IL3·EUREKA" />
            <Header />
            <div className="container mx-auto mt-5">
                <h1 className="text-3xl font-bold">
                    Configuración del front y back
                </h1>
                <h3>TailwindCSS integrado</h3>
                <h3>Inertiajs integrado</h3>
            </div>
        </>
    );
}

export const Header = () => {
    return (
        <div className="md:flex md:flex-row md:justify-between m-auto  bg-blue-700 py-3 text-white px-2">
            <div className="flex md:gap-28 gap-3 items-center justify-between flex-col md:flex-row">
                <div className="logo">Logo</div>
                <div className="sofwareName">
                    <h1 className="text-4xl font-bold">Eureka</h1>
                </div>

                <ul className="flex gap-4 items-center bg-blue-800 rounded-full py-1 px-2">
                    <li className="px-10 py-1 rounded-full">Inicio</li>
                    <li className="px-10 py-1 rounded-full bg-blue-500">
                        Gestion
                    </li>
                </ul>
            </div>
            {/* //TODO: Lado izquierdo */}
            <div className="flex items-center gap-2 justify-center mt-4 md:mt-0">
                <div className="border-white rounded-full border p-1">
                    Icono
                </div>
                <div className="flex items-center gap-2">
                    <p className="border-white rounded-full border p-1">
                        icono
                    </p>
                    <span className="flex items-center gap-1">
                        Martin López Guadaira
                    </span>
                </div>
            </div>
        </div>
    );
};
