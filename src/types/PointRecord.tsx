export interface PointRecord {
    id: number;
    code: string;
    startTime: string;
    endTime: string;
    type: 'entry' | 'exit';
}