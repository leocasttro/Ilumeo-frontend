import axios from 'axios';
import { PointRecord } from '../types/PointRecord';

const API_URL = 'https://ilumeo-kllm.onrender.com/api';

const timeService = {
  async getTimeEntries(code: string): Promise<PointRecord[]> {
    try {
      const response = await axios.get(`${API_URL}/time-entry`, {
        params: { code: code.trim() },
        timeout: 5000
      });
      return response.data || [];
    } catch (error) {
      console.error('Erro ao buscar entradas:', error);
      throw new Error('Falha ao buscar entradas de tempo');
    }
  },

  async registerTimeEntry(code: string, type: 'entry' | 'exit'): Promise<PointRecord> {
    try {
      const response = await axios.post(`${API_URL}/time-entry`, { code: code.trim(), type }, {
        timeout: 5000
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao registrar entrada:', error);
      throw new Error('Falha ao registrar entrada');
    }
  }
};

export const getRecords = timeService.getTimeEntries;
export const saveRecord = timeService.registerTimeEntry;
export default timeService;