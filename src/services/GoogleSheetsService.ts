const SHEETS_URL = import.meta.env.VITE_SHEETS_URL;

export interface LeadData {
  fullName: string;
  email: string;
  programInterest: string;
}

export interface LeadRecord extends LeadData {
  timestamp: string;
}

export const submitLead = async (data: LeadData): Promise<boolean> => {
  try {
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return true;
  } catch (error) {
    console.error('Error submitting lead:', error);
    return false;
  }
};

export const getLeads = async (): Promise<LeadRecord[]> => {
  try {
    const response = await fetch(SHEETS_URL);
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
};