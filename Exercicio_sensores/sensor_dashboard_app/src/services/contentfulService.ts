import { createClient, type EntryCollection, type Entry, type EntrySkeletonType } from 'contentful';

// Definindo a interface para os campos de uma Leitura de Sensor

// Nomes dos componentes criados no Contentful.
export interface LeituraSensorFields {
  identificadorDoSensor?: string;
  timestampDaLeitura?: string; 
  temperaturaDoMotor?: number;
  temperaturaDaBomba?: number;
  consumoEnergetico?: number;
}


export interface LeituraSensorSkeleton extends EntrySkeletonType {
  contentTypeId: 'device'; 
  fields: LeituraSensorFields;
}

export type LeituraSensorEntry = Entry<LeituraSensorSkeleton, undefined, string>;

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Contentful Space ID or Access Token is not defined. Check your .env file.");
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Função para buscar todas as leituras de sensor
export const fetchSensorReadings = async (): Promise<EntryCollection<LeituraSensorSkeleton, undefined, string>> => {
  try {
    const entries = await client.getEntries<LeituraSensorSkeleton, undefined, string>({
      content_type: 'device', 
      order: ['-fields.timestampDaLeitura'],
    });
    return entries;
  } catch (error) {
    console.error("Error fetching sensor readings from Contentful:", error);
    throw error; 
  }
};