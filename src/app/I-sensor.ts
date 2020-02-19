export interface Sensor {
    id: number;
    stationId: number;
    param: {
        paramName: string;
        paramFormula: string;
        paramCode: string;
        idParam: number;
    }
}