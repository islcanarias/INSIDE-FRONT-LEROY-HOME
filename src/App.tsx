import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const subdominios = [
    { nombre: 'Login', url: import.meta.env.VITE_LOGIN_URL, icono: 'pi pi-users' },
    { nombre: 'Pedidos', url: import.meta.env.VITE_LEROY_PEDIDOS_URL, icono: 'pi pi-map' },
];

const App = () => {
    return (
        <div className="p-4">
            <h2 className="text-center mb-4">Informes - Accede a un portal</h2>

            <div className="grid">
                {subdominios.map((item, idx) => (
                    <div key={idx} className="col-12 md:col-4">
                        <Card title={item.nombre} className="text-center">
                            <i className={`${item.icono} text-4xl`} />
                            <div className="mt-3">
                                <Button
                                    label="Entrar"
                                    icon="pi pi-sign-in"
                                    onClick={() => window.location.href = item.url}
                                />
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
