export interface SensorReading {
    date: string;
    value: number | null;
}
export interface SensorData {
    key: string;
    values: SensorReading[]
}