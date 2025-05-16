import { useEffect, useState } from 'react';
import './App.css';
import { fetchSensorReadings, type LeituraSensorEntry } from './services/contentfulService';

function App() {
  const [sensorReadings, setSensorReadings] = useState<LeituraSensorEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getReadings = async () => {
      try {
        setLoading(true);
        const readings = await fetchSensorReadings();
        setSensorReadings(readings.items);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Falha ao buscar os dados dos sensores.');
      } finally {
        setLoading(false);
      }
    };

    getReadings();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Carregando dados dos sensores...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-center text-red-500">Erro: {error}</div>;
  }

  if (sensorReadings.length === 0) {
    return <div className="container mx-auto p-4 text-center">Nenhuma leitura de sensor encontrada.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard de Sensores IIoT</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-left">ID do Sensor</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Timestamp</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-right">Temp. Motor (°C)</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-right">Temp. Bomba (°C)</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-right">Consumo (kWh)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sensorReadings.map((entry) => (
              <tr key={entry.sys.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{entry.fields.identificadorDoSensor || 'N/A'}</td>
                <td className="py-3 px-4">
                  {entry.fields.timestampDaLeitura 
                    ? new Date(entry.fields.timestampDaLeitura).toLocaleString('pt-BR') 
                    : 'N/A'}
                </td>
                <td className="py-3 px-4 text-right">{entry.fields.temperaturaDoMotor?.toFixed(2) || 'N/A'}</td>
                <td className="py-3 px-4 text-right">{entry.fields.temperaturaDaBomba?.toFixed(2) || 'N/A'}</td>
                <td className="py-3 px-4 text-right">{entry.fields.consumoEnergetico?.toFixed(2) || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

