// Nepal Political Parties Data
export interface Party {
  id: string;
  name: string;
  symbolURL: string;
}

// Sample political parties data
export const partiesData: Party[] = [
  {
    id: 'party-uml',
    name: 'Nepal Communist Party (UML)',
    symbolURL: '/images/party-symbols/uml-symbol.png'
  },
  {
    id: 'party-nc',
    name: 'Nepali Congress',
    symbolURL: '/images/party-symbols/nc-symbol.png'
  },
  {
    id: 'party-mc',
    name: 'Nepal Communist Party (Maoist Centre)',
    symbolURL: '/images/party-symbols/mc-symbol.png'
  },
  {
    id: 'party-jsp',
    name: 'Janata Samajbadi Party',
    symbolURL: '/images/party-symbols/jsp-symbol.png'
  },
  {
    id: 'party-rpp',
    name: 'Rastriya Prajatantra Party',
    symbolURL: '/images/party-symbols/rpp-symbol.png'
  }
];

// Helper functions for party data access
export const getAllParties = (): Party[] => {
  return partiesData;
};

export const getPartyById = (partyId: string): Party | undefined => {
  return partiesData.find(party => party.id === partyId);
};

export const getPartyByName = (partyName: string): Party | undefined => {
  return partiesData.find(party => party.name === partyName);
};
