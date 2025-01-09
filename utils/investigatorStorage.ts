import * as FileSystem from 'expo-file-system';
import { Investigator } from '@/types/Investigator';

const investigatorDir = `${FileSystem.documentDirectory}investigators/`;

// ensure the investigator directory exists
export const ensureInvestigatorDirectory = async () => {
  const dirInfo = await FileSystem.getInfoAsync(investigatorDir);
  if (!dirInfo.exists) {
    console.log('Creating investigators directory...');
    await FileSystem.makeDirectoryAsync(investigatorDir, { intermediates: true });
  }
};

// save an investigator to a file
export const saveInvestigator = async (investigator: Investigator, fileName: string): Promise<void> => {
  try {
    await ensureInvestigatorDirectory();
    const filePath = `${investigatorDir}${fileName}`;
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(investigator, null, 2)); // Pretty-print JSON
    console.log(`Investigator saved to: ${filePath}`);
  } catch (error) {
    console.error('Error saving investigator:', error);
    throw error;
  }
};

// load an investigator from a file and validate its type
export const loadInvestigator = async (fileName: string): Promise<Investigator> => {
  try {
    const filePath = `${investigatorDir}${fileName}`;
    const fileExists = await FileSystem.getInfoAsync(filePath);

    if (!fileExists.exists) {
      throw new Error(`File not found: ${filePath}`);
    }

    const content = await FileSystem.readAsStringAsync(filePath);
    const investigator: Investigator = {fileName: fileName, ...JSON.parse(content) };

    return investigator;
  } catch (error) {
    console.error('Error loading investigator:', error);
    throw error;
  }
};

// load a sample investigator from assets and validate its type
export const loadSampleInvestigator = async (): Promise<Investigator> => {
  try {
    const sampleInvestigator = require('@/assets/investigators/sampleInvestigator.json');
    sampleInvestigator.details.imagePath = require('@/assets/investigators/sampleInvestigator.png');

    return sampleInvestigator;
  } catch (error) {
    console.error('Error loading sample investigator:', error);
    throw error;
  }
};

// load all investigators in the directory and validate their types
export const loadAllInvestigators = async (): Promise<Investigator[]> => {
  try {
    await ensureInvestigatorDirectory();
    const files = await FileSystem.readDirectoryAsync(investigatorDir);
    const investigators: Investigator[] = [];

    for (const file of files) {
      const filePath = `${investigatorDir}${file}`;
      const content = await FileSystem.readAsStringAsync(filePath);
      const investigator: Investigator = JSON.parse(content);

      investigators.push(investigator);
    }
    
    // for testing purposes, load a sample investigator
    const sampleInvestigator = await loadSampleInvestigator();
    for (let i = 0; i < 3; i++) {
      investigators.push(sampleInvestigator);
    }

    return investigators;
  } catch (error) {
    console.error('Error loading all investigators:', error);
    throw error;
  }
};
