// Nepal Federal Constituencies Candidates Data
export interface Candidate {
  // Personal Info
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  photoURL?: string;
  
  // Political Info
  partyId: string; // Reference to party ID
  pastElectionHistory: string; // Simple string description
  agendas: string[]; // Simple array of agenda strings
  
  // Public Declarations
  education: string; // Simple string
  assetsWorth: number; // Total assets in NPR
  criminalRecords: string[]; // Simple array of criminal record descriptions
  contactInfo: {
    phone?: string;
    email?: string;
    address?: string;
  };
  
  // Public Score Rating
  publicScoreRating: number; // 0-10 scale
  
  // Reference
  constituencyId: string; // Reference to constituency ID
}

// Sample candidates data with constituency ID references
export const candidatesData: Candidate[] = 
[
  {
    "id": "candidate-1-1-1-1",
    "name": "Krishna Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_chhetri.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Tourism promotion",
      "Digital connectivity",
      "Agricultural support"
    ],
    "education": "Bachelors",
    "assetsWorth": 27884172,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983954997",
      "email": "krishna_chhetri@example.com",
      "address": "Bhojpur, Koshi"
    },
    "publicScoreRating": 4.1,
    "constituencyId": "constituency-1-1-1"
  },
  {
    "id": "candidate-1-1-1-2",
    "name": "Gita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_yadav.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Agricultural support",
      "Clean water access",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 29564084,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984164598",
      "email": "gita_yadav@example.com",
      "address": "Bhojpur, Koshi"
    },
    "publicScoreRating": 4.4,
    "constituencyId": "constituency-1-1-1"
  },
  {
    "id": "candidate-1-2-1-1",
    "name": "Raj Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_shrestha.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Education reform",
      "Flood control",
      "Anti-corruption measures"
    ],
    "education": "Bachelors",
    "assetsWorth": 25299319,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986516620",
      "email": "raj_shrestha@example.com",
      "address": "Dhankuta, Koshi"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-1-2-1"
  },
  {
    "id": "candidate-1-2-1-2",
    "name": "Manjita Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Electricity expansion",
      "Job creation",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 9617844,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981720605",
      "email": "manjita_pokharel@example.com",
      "address": "Dhankuta, Koshi"
    },
    "publicScoreRating": 6.4,
    "constituencyId": "constituency-1-2-1"
  },
  {
    "id": "candidate-1-3-1-1",
    "name": "Anita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_pandey.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Infrastructure development",
      "Anti-corruption measures",
      "Job creation"
    ],
    "education": "Masters",
    "assetsWorth": 3652460,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986879083",
      "email": "anita_pandey@example.com",
      "address": "Ilam, Koshi"
    },
    "publicScoreRating": 8.2,
    "constituencyId": "constituency-1-3-1"
  },
  {
    "id": "candidate-1-3-1-2",
    "name": "Sunita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Road construction",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 20771514,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987968122",
      "email": "sunita_maharjan@example.com",
      "address": "Ilam, Koshi"
    },
    "publicScoreRating": 9.0,
    "constituencyId": "constituency-1-3-1"
  },
  {
    "id": "candidate-1-3-2-1",
    "name": "Asha Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Anti-corruption measures",
      "Electricity expansion",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 24801886,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980345172",
      "email": "asha_chhetri@example.com",
      "address": "Ilam, Koshi"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-1-3-2"
  },
  {
    "id": "candidate-1-3-2-2",
    "name": "Prakash Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_karki.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Job creation",
      "Healthcare improvement",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 29596689,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985030884",
      "email": "prakash_karki@example.com",
      "address": "Ilam, Koshi"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-1-3-2"
  },
  {
    "id": "candidate-1-4-1-1",
    "name": "Hari Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_maharjan.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Electricity expansion",
      "Road construction",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 3943366,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981505735",
      "email": "hari_maharjan@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-1-4-1"
  },
  {
    "id": "candidate-1-4-1-2",
    "name": "Kunti Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_gurung.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Women empowerment",
      "Agricultural support",
      "Electricity expansion"
    ],
    "education": "High School",
    "assetsWorth": 20437260,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989855840",
      "email": "kunti_gurung@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-1-4-1"
  },
  {
    "id": "candidate-1-4-2-1",
    "name": "Sabita Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Youth development",
      "Agricultural support",
      "Local industry support"
    ],
    "education": "High School",
    "assetsWorth": 8592778,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983011894",
      "email": "sabita_chhetri@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-1-4-2"
  },
  {
    "id": "candidate-1-4-2-2",
    "name": "Kunti Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Flood control",
      "Youth development",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 6550785,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988860444",
      "email": "kunti_maharjan@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 4.6,
    "constituencyId": "constituency-1-4-2"
  },
  {
    "id": "candidate-1-4-3-1",
    "name": "Krishna Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pokharel.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Women empowerment",
      "Road construction",
      "Agricultural support"
    ],
    "education": "Masters",
    "assetsWorth": 21741300,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986534443",
      "email": "krishna_pokharel@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-1-4-3"
  },
  {
    "id": "candidate-1-4-3-2",
    "name": "Krishna Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pokharel.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Job creation",
      "Clean water access",
      "Infrastructure development"
    ],
    "education": "MBA",
    "assetsWorth": 8856995,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985064438",
      "email": "krishna_pokharel@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-1-4-3"
  },
  {
    "id": "candidate-1-4-4-1",
    "name": "Sabita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_gurung.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Forest conservation",
      "Road construction",
      "Flood control"
    ],
    "education": "Bachelors",
    "assetsWorth": 8691590,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982644026",
      "email": "sabita_gurung@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-1-4-4"
  },
  {
    "id": "candidate-1-4-4-2",
    "name": "Sunita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Job creation",
      "Agricultural support",
      "Clean water access"
    ],
    "education": "Bachelors",
    "assetsWorth": 5446751,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989452364",
      "email": "sunita_pandey@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-1-4-4"
  },
  {
    "id": "candidate-1-4-5-1",
    "name": "Prakash Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_adhikari.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Education reform",
      "Digital connectivity",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 25583573,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982169292",
      "email": "prakash_adhikari@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 6.2,
    "constituencyId": "constituency-1-4-5"
  },
  {
    "id": "candidate-1-4-5-2",
    "name": "Gita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Women empowerment",
      "Job creation",
      "Electricity expansion"
    ],
    "education": "MBA",
    "assetsWorth": 26226776,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984919799",
      "email": "gita_rai@example.com",
      "address": "Jhapa, Koshi"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-1-4-5"
  },
  {
    "id": "candidate-1-5-1-1",
    "name": "Maya Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_subedi.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Clean water access",
      "Flood control",
      "Healthcare improvement"
    ],
    "education": "Masters",
    "assetsWorth": 19365203,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982978263",
      "email": "maya_subedi@example.com",
      "address": "Khotang, Koshi"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-1-5-1"
  },
  {
    "id": "candidate-1-5-1-2",
    "name": "Priya Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_shrestha.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Youth development",
      "Education reform",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 17071181,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981106308",
      "email": "priya_shrestha@example.com",
      "address": "Khotang, Koshi"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-1-5-1"
  },
  {
    "id": "candidate-1-6-1-1",
    "name": "Sabita Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_karki.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Digital connectivity",
      "Clean water access",
      "Job creation"
    ],
    "education": "MBA",
    "assetsWorth": 4260988,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985651647",
      "email": "sabita_karki@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-1-6-1"
  },
  {
    "id": "candidate-1-6-1-2",
    "name": "Suman Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Clean water access",
      "Local industry support",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 4775755,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984576835",
      "email": "suman_chhetri@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 8.2,
    "constituencyId": "constituency-1-6-1"
  },
  {
    "id": "candidate-1-6-2-1",
    "name": "Bishal Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_bhatt.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Anti-corruption measures",
      "Women empowerment"
    ],
    "education": "Masters",
    "assetsWorth": 29290788,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983770004",
      "email": "bishal_bhatt@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-1-6-2"
  },
  {
    "id": "candidate-1-6-2-2",
    "name": "Krishna Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_gurung.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Flood control",
      "Forest conservation"
    ],
    "education": "PhD",
    "assetsWorth": 9659085,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981204618",
      "email": "krishna_gurung@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 6.7,
    "constituencyId": "constituency-1-6-2"
  },
  {
    "id": "candidate-1-6-3-1",
    "name": "Kamal Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Anti-corruption measures",
      "Local industry support"
    ],
    "education": "PhD",
    "assetsWorth": 20969583,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989388556",
      "email": "kamal_rai@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-1-6-3"
  },
  {
    "id": "candidate-1-6-3-2",
    "name": "Hari Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Local industry support",
      "Infrastructure development",
      "Women empowerment"
    ],
    "education": "High School",
    "assetsWorth": 22800908,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989308981",
      "email": "hari_shrestha@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 4.1,
    "constituencyId": "constituency-1-6-3"
  },
  {
    "id": "candidate-1-6-4-1",
    "name": "Ram Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_karki.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Digital connectivity",
      "Youth development",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 11110072,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989770808",
      "email": "ram_karki@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 5.7,
    "constituencyId": "constituency-1-6-4"
  },
  {
    "id": "candidate-1-6-4-2",
    "name": "Priya Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Road construction",
      "Electricity expansion",
      "Flood control"
    ],
    "education": "Bachelors",
    "assetsWorth": 1530161,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984925503",
      "email": "priya_yadav@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-1-6-4"
  },
  {
    "id": "candidate-1-6-5-1",
    "name": "Gita Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Flood control",
      "Digital connectivity",
      "Tourism promotion"
    ],
    "education": "MBA",
    "assetsWorth": 22426004,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986042923",
      "email": "gita_karki@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-1-6-5"
  },
  {
    "id": "candidate-1-6-5-2",
    "name": "Dipak Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/dipak_thapa.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Electricity expansion",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 17561830,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980395838",
      "email": "dipak_thapa@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-1-6-5"
  },
  {
    "id": "candidate-1-6-6-1",
    "name": "Dipak Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/dipak_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Electricity expansion",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 27406743,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983808347",
      "email": "dipak_pokharel@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 9.1,
    "constituencyId": "constituency-1-6-6"
  },
  {
    "id": "candidate-1-6-6-2",
    "name": "Maya Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Electricity expansion",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 15734677,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986889534",
      "email": "maya_pandey@example.com",
      "address": "Morang, Koshi"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-1-6-6"
  },
  {
    "id": "candidate-1-7-1-1",
    "name": "Gita Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_karki.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Tourism promotion",
      "Electricity expansion",
      "Forest conservation"
    ],
    "education": "High School",
    "assetsWorth": 19687770,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982310472",
      "email": "gita_karki@example.com",
      "address": "Okhaldhunga, Koshi"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-1-7-1"
  },
  {
    "id": "candidate-1-7-1-2",
    "name": "Ram Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_chhetri.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Job creation",
      "Local industry support",
      "Education reform"
    ],
    "education": "High School",
    "assetsWorth": 7834137,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985968630",
      "email": "ram_chhetri@example.com",
      "address": "Okhaldhunga, Koshi"
    },
    "publicScoreRating": 6.5,
    "constituencyId": "constituency-1-7-1"
  },
  {
    "id": "candidate-1-8-1-1",
    "name": "Gita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_rai.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Education reform",
      "Infrastructure development",
      "Local industry support"
    ],
    "education": "Bachelors",
    "assetsWorth": 8176062,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989611953",
      "email": "gita_rai@example.com",
      "address": "Panchthar, Koshi"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-1-8-1"
  },
  {
    "id": "candidate-1-8-1-2",
    "name": "Gita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_maharjan.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Flood control",
      "Local industry support",
      "Education reform"
    ],
    "education": "MBA",
    "assetsWorth": 16072405,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980986195",
      "email": "gita_maharjan@example.com",
      "address": "Panchthar, Koshi"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-1-8-1"
  },
  {
    "id": "candidate-1-9-1-1",
    "name": "Sujata Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_thapa.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Road construction",
      "Local industry support",
      "Tourism promotion"
    ],
    "education": "PhD",
    "assetsWorth": 24252580,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988074925",
      "email": "sujata_thapa@example.com",
      "address": "Sankhuwasabha, Koshi"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-1-9-1"
  },
  {
    "id": "candidate-1-9-1-2",
    "name": "Narayan Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Women empowerment",
      "Digital connectivity",
      "Agricultural support"
    ],
    "education": "Masters",
    "assetsWorth": 10826385,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985247541",
      "email": "narayan_subedi@example.com",
      "address": "Sankhuwasabha, Koshi"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-1-9-1"
  },
  {
    "id": "candidate-1-10-1-1",
    "name": "Ram Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_maharjan.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Local industry support",
      "Infrastructure development",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 20455387,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982076304",
      "email": "ram_maharjan@example.com",
      "address": "Solukhumbu, Koshi"
    },
    "publicScoreRating": 6.1,
    "constituencyId": "constituency-1-10-1"
  },
  {
    "id": "candidate-1-10-1-2",
    "name": "Narayan Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_adhikari.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Youth development",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 19961217,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981780790",
      "email": "narayan_adhikari@example.com",
      "address": "Solukhumbu, Koshi"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-1-10-1"
  },
  {
    "id": "candidate-1-11-1-1",
    "name": "Suraj Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Road construction",
      "Agricultural support",
      "Education reform"
    ],
    "education": "PhD",
    "assetsWorth": 8693427,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981726674",
      "email": "suraj_thapa@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-1-11-1"
  },
  {
    "id": "candidate-1-11-1-2",
    "name": "Priya Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_gurung.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Healthcare improvement",
      "Clean water access",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 16942142,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989488773",
      "email": "priya_gurung@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-1-11-1"
  },
  {
    "id": "candidate-1-11-2-1",
    "name": "Sunita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_bhatt.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Road construction",
      "Flood control",
      "Digital connectivity"
    ],
    "education": "High School",
    "assetsWorth": 23954488,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986410156",
      "email": "sunita_bhatt@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 8.2,
    "constituencyId": "constituency-1-11-2"
  },
  {
    "id": "candidate-1-11-2-2",
    "name": "Sunita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_rai.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Healthcare improvement",
      "Job creation",
      "Agricultural support"
    ],
    "education": "Masters",
    "assetsWorth": 1265221,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988979820",
      "email": "sunita_rai@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 6.3,
    "constituencyId": "constituency-1-11-2"
  },
  {
    "id": "candidate-1-11-3-1",
    "name": "Sujata Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_karki.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Agricultural support",
      "Youth development",
      "Flood control"
    ],
    "education": "High School",
    "assetsWorth": 10146076,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988045375",
      "email": "sujata_karki@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-1-11-3"
  },
  {
    "id": "candidate-1-11-3-2",
    "name": "Sunita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Anti-corruption measures",
      "Local industry support",
      "Flood control"
    ],
    "education": "Bachelors",
    "assetsWorth": 1349923,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980495233",
      "email": "sunita_thapa@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 6.3,
    "constituencyId": "constituency-1-11-3"
  },
  {
    "id": "candidate-1-11-4-1",
    "name": "Sunita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Local industry support",
      "Women empowerment",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 8053622,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986231207",
      "email": "sunita_maharjan@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-1-11-4"
  },
  {
    "id": "candidate-1-11-4-2",
    "name": "Hari Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_shrestha.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Forest conservation",
      "Healthcare improvement",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 20883470,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989756238",
      "email": "hari_shrestha@example.com",
      "address": "Sunsari, Koshi"
    },
    "publicScoreRating": 5.7,
    "constituencyId": "constituency-1-11-4"
  },
  {
    "id": "candidate-1-12-1-1",
    "name": "Kunti Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_rai.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Infrastructure development",
      "Agricultural support",
      "Electricity expansion"
    ],
    "education": "Masters",
    "assetsWorth": 23379611,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989006803",
      "email": "kunti_rai@example.com",
      "address": "Taplejung, Koshi"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-1-12-1"
  },
  {
    "id": "candidate-1-12-1-2",
    "name": "Maya Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_pokharel.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Road construction",
      "Forest conservation",
      "Flood control"
    ],
    "education": "High School",
    "assetsWorth": 7834034,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983393614",
      "email": "maya_pokharel@example.com",
      "address": "Taplejung, Koshi"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-1-12-1"
  },
  {
    "id": "candidate-1-13-1-1",
    "name": "Sujata Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Education reform",
      "Local industry support",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 2315147,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982703681",
      "email": "sujata_thapa@example.com",
      "address": "Terhathum, Koshi"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-1-13-1"
  },
  {
    "id": "candidate-1-13-1-2",
    "name": "Raj Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_pandey.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Anti-corruption measures",
      "Road construction"
    ],
    "education": "Masters",
    "assetsWorth": 7028011,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985254124",
      "email": "raj_pandey@example.com",
      "address": "Terhathum, Koshi"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-1-13-1"
  },
  {
    "id": "candidate-1-14-1-1",
    "name": "Ram Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Clean water access",
      "Flood control",
      "Road construction"
    ],
    "education": "Bachelors",
    "assetsWorth": 2561906,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986232603",
      "email": "ram_subedi@example.com",
      "address": "Udayapur, Koshi"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-1-14-1"
  },
  {
    "id": "candidate-1-14-1-2",
    "name": "Kunti Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_chhetri.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Tourism promotion",
      "Clean water access",
      "Agricultural support"
    ],
    "education": "PhD",
    "assetsWorth": 16889737,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988297036",
      "email": "kunti_chhetri@example.com",
      "address": "Udayapur, Koshi"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-1-14-1"
  },
  {
    "id": "candidate-1-14-2-1",
    "name": "Anita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_adhikari.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Women empowerment",
      "Healthcare improvement",
      "Flood control"
    ],
    "education": "MBA",
    "assetsWorth": 17024107,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983824133",
      "email": "anita_adhikari@example.com",
      "address": "Udayapur, Koshi"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-1-14-2"
  },
  {
    "id": "candidate-1-14-2-2",
    "name": "Anita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_rai.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Flood control",
      "Road construction",
      "Clean water access"
    ],
    "education": "Masters",
    "assetsWorth": 4252835,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980325569",
      "email": "anita_rai@example.com",
      "address": "Udayapur, Koshi"
    },
    "publicScoreRating": 4.1,
    "constituencyId": "constituency-1-14-2"
  },
  {
    "id": "candidate-2-1-1-1",
    "name": "Suraj Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_pokharel.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Local industry support",
      "Forest conservation",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 29698661,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988009177",
      "email": "suraj_pokharel@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-2-1-1"
  },
  {
    "id": "candidate-2-1-1-2",
    "name": "Suraj Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Infrastructure development",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 12255853,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980366783",
      "email": "suraj_rai@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-2-1-1"
  },
  {
    "id": "candidate-2-1-2-1",
    "name": "Asha Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_rai.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Healthcare improvement",
      "Flood control",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 17983256,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980280155",
      "email": "asha_rai@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-2-1-2"
  },
  {
    "id": "candidate-2-1-2-2",
    "name": "Suman Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_bhatt.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Flood control",
      "Local industry support",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 22246976,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989188286",
      "email": "suman_bhatt@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-2-1-2"
  },
  {
    "id": "candidate-2-1-3-1",
    "name": "Anita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_yadav.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Job creation",
      "Clean water access",
      "Education reform"
    ],
    "education": "Masters",
    "assetsWorth": 6592575,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982944416",
      "email": "anita_yadav@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-2-1-3"
  },
  {
    "id": "candidate-2-1-3-2",
    "name": "Kunti Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_adhikari.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Agricultural support",
      "Infrastructure development",
      "Women empowerment"
    ],
    "education": "PhD",
    "assetsWorth": 24671688,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980014808",
      "email": "kunti_adhikari@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 6.0,
    "constituencyId": "constituency-2-1-3"
  },
  {
    "id": "candidate-2-1-4-1",
    "name": "Narayan Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Digital connectivity",
      "Job creation",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 15202747,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988740503",
      "email": "narayan_rai@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-2-1-4"
  },
  {
    "id": "candidate-2-1-4-2",
    "name": "Kunti Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_rai.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Education reform",
      "Tourism promotion",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 10644664,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985569107",
      "email": "kunti_rai@example.com",
      "address": "Bara, Madhesh"
    },
    "publicScoreRating": 5.4,
    "constituencyId": "constituency-2-1-4"
  },
  {
    "id": "candidate-2-2-1-1",
    "name": "Kunti Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_pokharel.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Women empowerment",
      "Clean water access",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 11155292,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982335011",
      "email": "kunti_pokharel@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-2-2-1"
  },
  {
    "id": "candidate-2-2-1-2",
    "name": "Hari Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Agricultural support",
      "Women empowerment",
      "Electricity expansion"
    ],
    "education": "Bachelors",
    "assetsWorth": 13658583,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985518680",
      "email": "hari_subedi@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 9.1,
    "constituencyId": "constituency-2-2-1"
  },
  {
    "id": "candidate-2-2-2-1",
    "name": "Sita Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Electricity expansion",
      "Youth development",
      "Tourism promotion"
    ],
    "education": "PhD",
    "assetsWorth": 16544035,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983418323",
      "email": "sita_subedi@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-2-2-2"
  },
  {
    "id": "candidate-2-2-2-2",
    "name": "Sita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_adhikari.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Tourism promotion",
      "Women empowerment",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 11341825,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985098782",
      "email": "sita_adhikari@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-2-2-2"
  },
  {
    "id": "candidate-2-2-3-1",
    "name": "Manjita Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_pokharel.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Agricultural support",
      "Healthcare improvement",
      "Anti-corruption measures"
    ],
    "education": "Bachelors",
    "assetsWorth": 22656118,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987229423",
      "email": "manjita_pokharel@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-2-2-3"
  },
  {
    "id": "candidate-2-2-3-2",
    "name": "Narayan Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_karki.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Clean water access",
      "Education reform",
      "Women empowerment"
    ],
    "education": "MBA",
    "assetsWorth": 26763531,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988177325",
      "email": "narayan_karki@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-2-2-3"
  },
  {
    "id": "candidate-2-2-4-1",
    "name": "Sita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_rai.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Anti-corruption measures",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 29109342,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981338213",
      "email": "sita_rai@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 5.7,
    "constituencyId": "constituency-2-2-4"
  },
  {
    "id": "candidate-2-2-4-2",
    "name": "Anita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_thapa.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Road construction",
      "Healthcare improvement",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 1463491,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983412475",
      "email": "anita_thapa@example.com",
      "address": "Dhanusha, Madhesh"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-2-2-4"
  },
  {
    "id": "candidate-2-3-1-1",
    "name": "Hari Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_chhetri.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Women empowerment",
      "Anti-corruption measures",
      "Local industry support"
    ],
    "education": "Masters",
    "assetsWorth": 1954456,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985157729",
      "email": "hari_chhetri@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-2-3-1"
  },
  {
    "id": "candidate-2-3-1-2",
    "name": "Prakash Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Agricultural support",
      "Forest conservation",
      "Infrastructure development"
    ],
    "education": "MBA",
    "assetsWorth": 6861659,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980118701",
      "email": "prakash_subedi@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-2-3-1"
  },
  {
    "id": "candidate-2-3-2-1",
    "name": "Prakash Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_pandey.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Digital connectivity",
      "Tourism promotion"
    ],
    "education": "MBA",
    "assetsWorth": 13247493,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989443219",
      "email": "prakash_pandey@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-2-3-2"
  },
  {
    "id": "candidate-2-3-2-2",
    "name": "Raj Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_yadav.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Anti-corruption measures",
      "Infrastructure development",
      "Road construction"
    ],
    "education": "Bachelors",
    "assetsWorth": 23607402,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986382865",
      "email": "raj_yadav@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-2-3-2"
  },
  {
    "id": "candidate-2-3-3-1",
    "name": "Manjita Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_chhetri.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Education reform",
      "Forest conservation",
      "Youth development"
    ],
    "education": "PhD",
    "assetsWorth": 22370688,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989506985",
      "email": "manjita_chhetri@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-2-3-3"
  },
  {
    "id": "candidate-2-3-3-2",
    "name": "Prakash Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Infrastructure development",
      "Job creation",
      "Digital connectivity"
    ],
    "education": "High School",
    "assetsWorth": 20769543,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981538845",
      "email": "prakash_thapa@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-2-3-3"
  },
  {
    "id": "candidate-2-3-4-1",
    "name": "Maya Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_bhatt.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Clean water access",
      "Tourism promotion",
      "Road construction"
    ],
    "education": "Masters",
    "assetsWorth": 5676782,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981848418",
      "email": "maya_bhatt@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 6.4,
    "constituencyId": "constituency-2-3-4"
  },
  {
    "id": "candidate-2-3-4-2",
    "name": "Anita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_thapa.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Flood control",
      "Forest conservation",
      "Agricultural support"
    ],
    "education": "Bachelors",
    "assetsWorth": 25524522,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983615507",
      "email": "anita_thapa@example.com",
      "address": "Mahottari, Madhesh"
    },
    "publicScoreRating": 6.3,
    "constituencyId": "constituency-2-3-4"
  },
  {
    "id": "candidate-2-4-1-1",
    "name": "Kamal Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_adhikari.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Education reform",
      "Women empowerment",
      "Youth development"
    ],
    "education": "High School",
    "assetsWorth": 5524746,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984441571",
      "email": "kamal_adhikari@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-2-4-1"
  },
  {
    "id": "candidate-2-4-1-2",
    "name": "Narayan Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Job creation",
      "Electricity expansion",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 18597169,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980504523",
      "email": "narayan_gurung@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-2-4-1"
  },
  {
    "id": "candidate-2-4-2-1",
    "name": "Sabita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_maharjan.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Digital connectivity",
      "Anti-corruption measures",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 16224237,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982848470",
      "email": "sabita_maharjan@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-2-4-2"
  },
  {
    "id": "candidate-2-4-2-2",
    "name": "Maya Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Job creation",
      "Electricity expansion",
      "Healthcare improvement"
    ],
    "education": "High School",
    "assetsWorth": 18104995,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988249411",
      "email": "maya_chhetri@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-2-4-2"
  },
  {
    "id": "candidate-2-4-3-1",
    "name": "Sita Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Women empowerment",
      "Agricultural support"
    ],
    "education": "Bachelors",
    "assetsWorth": 20178592,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981681487",
      "email": "sita_karki@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-2-4-3"
  },
  {
    "id": "candidate-2-4-3-2",
    "name": "Sabita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_maharjan.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Local industry support",
      "Forest conservation",
      "Healthcare improvement"
    ],
    "education": "PhD",
    "assetsWorth": 8598664,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985772224",
      "email": "sabita_maharjan@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-2-4-3"
  },
  {
    "id": "candidate-2-4-4-1",
    "name": "Sunita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_adhikari.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Clean water access",
      "Healthcare improvement",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 12885388,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986030595",
      "email": "sunita_adhikari@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-2-4-4"
  },
  {
    "id": "candidate-2-4-4-2",
    "name": "Maya Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_pandey.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Road construction",
      "Electricity expansion",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 4686502,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989319196",
      "email": "maya_pandey@example.com",
      "address": "Parsa, Madhesh"
    },
    "publicScoreRating": 4.4,
    "constituencyId": "constituency-2-4-4"
  },
  {
    "id": "candidate-2-5-1-1",
    "name": "Bikram Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_shrestha.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Infrastructure development",
      "Healthcare improvement",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 2785200,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980312324",
      "email": "bikram_shrestha@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-2-5-1"
  },
  {
    "id": "candidate-2-5-1-2",
    "name": "Sujata Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_karki.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Flood control",
      "Agricultural support",
      "Education reform"
    ],
    "education": "PhD",
    "assetsWorth": 10134881,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982015617",
      "email": "sujata_karki@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 9.0,
    "constituencyId": "constituency-2-5-1"
  },
  {
    "id": "candidate-2-5-2-1",
    "name": "Prakash Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_yadav.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Flood control",
      "Healthcare improvement",
      "Electricity expansion"
    ],
    "education": "Masters",
    "assetsWorth": 5460197,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983119010",
      "email": "prakash_yadav@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-2-5-2"
  },
  {
    "id": "candidate-2-5-2-2",
    "name": "Sujata Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_pandey.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Tourism promotion",
      "Agricultural support",
      "Women empowerment"
    ],
    "education": "PhD",
    "assetsWorth": 15235001,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986814517",
      "email": "sujata_pandey@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-2-5-2"
  },
  {
    "id": "candidate-2-5-3-1",
    "name": "Suman Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_bhatt.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Flood control",
      "Agricultural support",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 2763306,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980324562",
      "email": "suman_bhatt@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-2-5-3"
  },
  {
    "id": "candidate-2-5-3-2",
    "name": "Raj Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_karki.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Tourism promotion",
      "Youth development",
      "Local industry support"
    ],
    "education": "High School",
    "assetsWorth": 3511046,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984197677",
      "email": "raj_karki@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 6.2,
    "constituencyId": "constituency-2-5-3"
  },
  {
    "id": "candidate-2-5-4-1",
    "name": "Manjita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Education reform",
      "Job creation"
    ],
    "education": "MBA",
    "assetsWorth": 11042151,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981602121",
      "email": "manjita_bhatt@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 9.5,
    "constituencyId": "constituency-2-5-4"
  },
  {
    "id": "candidate-2-5-4-2",
    "name": "Sujata Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_bhatt.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Clean water access",
      "Local industry support",
      "Agricultural support"
    ],
    "education": "PhD",
    "assetsWorth": 28166153,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983210421",
      "email": "sujata_bhatt@example.com",
      "address": "Rautahat, Madhesh"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-2-5-4"
  },
  {
    "id": "candidate-2-6-1-1",
    "name": "Narayan Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_subedi.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Electricity expansion",
      "Women empowerment",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 6477093,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983824947",
      "email": "narayan_subedi@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-2-6-1"
  },
  {
    "id": "candidate-2-6-1-2",
    "name": "Priya Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_yadav.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Flood control",
      "Youth development",
      "Clean water access"
    ],
    "education": "PhD",
    "assetsWorth": 1928227,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982105583",
      "email": "priya_yadav@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-2-6-1"
  },
  {
    "id": "candidate-2-6-2-1",
    "name": "Sita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Education reform",
      "Local industry support",
      "Anti-corruption measures"
    ],
    "education": "MBA",
    "assetsWorth": 24988354,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982060159",
      "email": "sita_gurung@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-2-6-2"
  },
  {
    "id": "candidate-2-6-2-2",
    "name": "Ram Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_chhetri.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Clean water access",
      "Agricultural support",
      "Education reform"
    ],
    "education": "PhD",
    "assetsWorth": 11044357,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987890084",
      "email": "ram_chhetri@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 6.3,
    "constituencyId": "constituency-2-6-2"
  },
  {
    "id": "candidate-2-6-3-1",
    "name": "Narayan Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_subedi.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Road construction",
      "Electricity expansion",
      "Youth development"
    ],
    "education": "Bachelors",
    "assetsWorth": 6895675,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987850438",
      "email": "narayan_subedi@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-2-6-3"
  },
  {
    "id": "candidate-2-6-3-2",
    "name": "Sabita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Youth development",
      "Forest conservation",
      "Local industry support"
    ],
    "education": "PhD",
    "assetsWorth": 26573188,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987440169",
      "email": "sabita_pandey@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 7.1,
    "constituencyId": "constituency-2-6-3"
  },
  {
    "id": "candidate-2-6-4-1",
    "name": "Asha Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_shrestha.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Agricultural support",
      "Anti-corruption measures",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 21490677,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987804487",
      "email": "asha_shrestha@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 5.5,
    "constituencyId": "constituency-2-6-4"
  },
  {
    "id": "candidate-2-6-4-2",
    "name": "Priya Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Road construction",
      "Agricultural support"
    ],
    "education": "Masters",
    "assetsWorth": 6990743,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984698920",
      "email": "priya_pokharel@example.com",
      "address": "Saptari, Madhesh"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-2-6-4"
  },
  {
    "id": "candidate-2-7-1-1",
    "name": "Suraj Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Infrastructure development",
      "Agricultural support",
      "Local industry support"
    ],
    "education": "MBA",
    "assetsWorth": 26269237,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989983558",
      "email": "suraj_pandey@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-2-7-1"
  },
  {
    "id": "candidate-2-7-1-2",
    "name": "Suman Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Electricity expansion",
      "Women empowerment",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 17760927,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987354959",
      "email": "suman_pokharel@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-2-7-1"
  },
  {
    "id": "candidate-2-7-2-1",
    "name": "Suman Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_adhikari.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Local industry support",
      "Job creation"
    ],
    "education": "High School",
    "assetsWorth": 7154166,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982690229",
      "email": "suman_adhikari@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-2-7-2"
  },
  {
    "id": "candidate-2-7-2-2",
    "name": "Kunti Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Youth development",
      "Job creation",
      "Clean water access"
    ],
    "education": "Masters",
    "assetsWorth": 9839144,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980020424",
      "email": "kunti_pokharel@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-2-7-2"
  },
  {
    "id": "candidate-2-7-3-1",
    "name": "Gita Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Agricultural support",
      "Youth development",
      "Flood control"
    ],
    "education": "Masters",
    "assetsWorth": 2993490,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982071740",
      "email": "gita_subedi@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-2-7-3"
  },
  {
    "id": "candidate-2-7-3-2",
    "name": "Sunita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_rai.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Education reform",
      "Road construction",
      "Healthcare improvement"
    ],
    "education": "High School",
    "assetsWorth": 2917107,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987203341",
      "email": "sunita_rai@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-2-7-3"
  },
  {
    "id": "candidate-2-7-4-1",
    "name": "Raj Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_pokharel.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Electricity expansion",
      "Anti-corruption measures"
    ],
    "education": "PhD",
    "assetsWorth": 15557848,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986114865",
      "email": "raj_pokharel@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-2-7-4"
  },
  {
    "id": "candidate-2-7-4-2",
    "name": "Sunita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_bhatt.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Clean water access"
    ],
    "education": "High School",
    "assetsWorth": 15782402,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983863529",
      "email": "sunita_bhatt@example.com",
      "address": "Sarlahi, Madhesh"
    },
    "publicScoreRating": 6.5,
    "constituencyId": "constituency-2-7-4"
  },
  {
    "id": "candidate-2-8-1-1",
    "name": "Anita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_gurung.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Anti-corruption measures",
      "Healthcare improvement",
      "Youth development"
    ],
    "education": "MBA",
    "assetsWorth": 11668419,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986200537",
      "email": "anita_gurung@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-2-8-1"
  },
  {
    "id": "candidate-2-8-1-2",
    "name": "Sunita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Infrastructure development",
      "Anti-corruption measures",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 7122378,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984893230",
      "email": "sunita_gurung@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-2-8-1"
  },
  {
    "id": "candidate-2-8-2-1",
    "name": "Kunti Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Road construction",
      "Tourism promotion",
      "Electricity expansion"
    ],
    "education": "Bachelors",
    "assetsWorth": 2538502,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989020824",
      "email": "kunti_thapa@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-2-8-2"
  },
  {
    "id": "candidate-2-8-2-2",
    "name": "Suraj Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_karki.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Women empowerment",
      "Agricultural support",
      "Infrastructure development"
    ],
    "education": "Masters",
    "assetsWorth": 24276158,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985627665",
      "email": "suraj_karki@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-2-8-2"
  },
  {
    "id": "candidate-2-8-3-1",
    "name": "Kamal Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_shrestha.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Road construction",
      "Women empowerment",
      "Flood control"
    ],
    "education": "MBA",
    "assetsWorth": 28439290,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982319890",
      "email": "kamal_shrestha@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-2-8-3"
  },
  {
    "id": "candidate-2-8-3-2",
    "name": "Manjita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Forest conservation",
      "Job creation"
    ],
    "education": "Bachelors",
    "assetsWorth": 17629233,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982874826",
      "email": "manjita_gurung@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-2-8-3"
  },
  {
    "id": "candidate-2-8-4-1",
    "name": "Gita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Youth development",
      "Clean water access",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 29759717,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987707845",
      "email": "gita_yadav@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-2-8-4"
  },
  {
    "id": "candidate-2-8-4-2",
    "name": "Ramesh Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Anti-corruption measures",
      "Flood control",
      "Job creation"
    ],
    "education": "Masters",
    "assetsWorth": 6245881,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983655798",
      "email": "ramesh_thapa@example.com",
      "address": "Siraha, Madhesh"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-2-8-4"
  },
  {
    "id": "candidate-3-1-1-1",
    "name": "Bishal Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_rai.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Youth development",
      "Healthcare improvement",
      "Job creation"
    ],
    "education": "High School",
    "assetsWorth": 10182557,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986931699",
      "email": "bishal_rai@example.com",
      "address": "Bhaktapur, Bagmati"
    },
    "publicScoreRating": 9.2,
    "constituencyId": "constituency-3-1-1"
  },
  {
    "id": "candidate-3-1-1-2",
    "name": "Bikram Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_bhatt.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Local industry support",
      "Agricultural support",
      "Clean water access"
    ],
    "education": "High School",
    "assetsWorth": 10099280,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986167409",
      "email": "bikram_bhatt@example.com",
      "address": "Bhaktapur, Bagmati"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-3-1-1"
  },
  {
    "id": "candidate-3-1-2-1",
    "name": "Maya Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_maharjan.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Road construction",
      "Women empowerment",
      "Local industry support"
    ],
    "education": "High School",
    "assetsWorth": 12505293,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981216878",
      "email": "maya_maharjan@example.com",
      "address": "Bhaktapur, Bagmati"
    },
    "publicScoreRating": 6.4,
    "constituencyId": "constituency-3-1-2"
  },
  {
    "id": "candidate-3-1-2-2",
    "name": "Ram Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_pokharel.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Clean water access",
      "Local industry support",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 10461208,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982487034",
      "email": "ram_pokharel@example.com",
      "address": "Bhaktapur, Bagmati"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-3-1-2"
  },
  {
    "id": "candidate-3-2-1-1",
    "name": "Kamal Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_yadav.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Anti-corruption measures",
      "Job creation"
    ],
    "education": "Masters",
    "assetsWorth": 12816624,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982667087",
      "email": "kamal_yadav@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-3-2-1"
  },
  {
    "id": "candidate-3-2-1-2",
    "name": "Hari Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Forest conservation",
      "Job creation"
    ],
    "education": "MBA",
    "assetsWorth": 23268206,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981652829",
      "email": "hari_gurung@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-3-2-1"
  },
  {
    "id": "candidate-3-2-2-1",
    "name": "Gita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_yadav.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Anti-corruption measures",
      "Agricultural support",
      "Youth development"
    ],
    "education": "PhD",
    "assetsWorth": 8704477,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986081976",
      "email": "gita_yadav@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 6.9,
    "constituencyId": "constituency-3-2-2"
  },
  {
    "id": "candidate-3-2-2-2",
    "name": "Sunita Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Infrastructure development",
      "Electricity expansion",
      "Education reform"
    ],
    "education": "PhD",
    "assetsWorth": 26222975,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987592610",
      "email": "sunita_subedi@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-3-2-2"
  },
  {
    "id": "candidate-3-2-3-1",
    "name": "Suman Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_karki.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Local industry support",
      "Healthcare improvement",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 3230731,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986645348",
      "email": "suman_karki@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-3-2-3"
  },
  {
    "id": "candidate-3-2-3-2",
    "name": "Kamal Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Local industry support",
      "Anti-corruption measures",
      "Infrastructure development"
    ],
    "education": "Bachelors",
    "assetsWorth": 2673477,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988152797",
      "email": "kamal_rai@example.com",
      "address": "Chitwan, Bagmati"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-3-2-3"
  },
  {
    "id": "candidate-3-3-1-1",
    "name": "Maya Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Education reform",
      "Forest conservation",
      "Infrastructure development"
    ],
    "education": "Masters",
    "assetsWorth": 7980091,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984397231",
      "email": "maya_chhetri@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-3-3-1"
  },
  {
    "id": "candidate-3-3-1-2",
    "name": "Asha Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Agricultural support",
      "Clean water access",
      "Digital connectivity"
    ],
    "education": "High School",
    "assetsWorth": 29922282,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987660791",
      "email": "asha_bhatt@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-3-3-1"
  },
  {
    "id": "candidate-3-3-2-1",
    "name": "Maya Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_gurung.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Digital connectivity",
      "Agricultural support",
      "Local industry support"
    ],
    "education": "PhD",
    "assetsWorth": 7893193,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989965460",
      "email": "maya_gurung@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 6.9,
    "constituencyId": "constituency-3-3-2"
  },
  {
    "id": "candidate-3-3-2-2",
    "name": "Priya Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_pokharel.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Youth development",
      "Agricultural support",
      "Electricity expansion"
    ],
    "education": "MBA",
    "assetsWorth": 1896799,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981217692",
      "email": "priya_pokharel@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-3-3-2"
  },
  {
    "id": "candidate-3-3-3-1",
    "name": "Asha Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Road construction",
      "Job creation",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 9746236,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987712980",
      "email": "asha_karki@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-3-3-3"
  },
  {
    "id": "candidate-3-3-3-2",
    "name": "Anita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_maharjan.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Anti-corruption measures",
      "Road construction",
      "Infrastructure development"
    ],
    "education": "MBA",
    "assetsWorth": 6908450,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984802090",
      "email": "anita_maharjan@example.com",
      "address": "Dhading, Bagmati"
    },
    "publicScoreRating": 6.3,
    "constituencyId": "constituency-3-3-3"
  },
  {
    "id": "candidate-3-4-1-1",
    "name": "Asha Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Digital connectivity",
      "Clean water access",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 18464414,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989829537",
      "email": "asha_thapa@example.com",
      "address": "Dolakha, Bagmati"
    },
    "publicScoreRating": 7.4,
    "constituencyId": "constituency-3-4-1"
  },
  {
    "id": "candidate-3-4-1-2",
    "name": "Maya Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_adhikari.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Agricultural support",
      "Electricity expansion",
      "Tourism promotion"
    ],
    "education": "MBA",
    "assetsWorth": 23967698,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982272876",
      "email": "maya_adhikari@example.com",
      "address": "Dolakha, Bagmati"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-3-4-1"
  },
  {
    "id": "candidate-3-5-1-1",
    "name": "Maya Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Healthcare improvement",
      "Road construction",
      "Education reform"
    ],
    "education": "Masters",
    "assetsWorth": 21927254,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986702743",
      "email": "maya_yadav@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 6.9,
    "constituencyId": "constituency-3-5-1"
  },
  {
    "id": "candidate-3-5-1-2",
    "name": "Sujata Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_chhetri.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Women empowerment",
      "Youth development",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 27024740,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984486091",
      "email": "sujata_chhetri@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 6.9,
    "constituencyId": "constituency-3-5-1"
  },
  {
    "id": "candidate-3-5-2-1",
    "name": "Ramesh Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_yadav.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Infrastructure development",
      "Job creation",
      "Forest conservation"
    ],
    "education": "PhD",
    "assetsWorth": 20051877,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989765347",
      "email": "ramesh_yadav@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-3-5-2"
  },
  {
    "id": "candidate-3-5-2-2",
    "name": "Manjita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_shrestha.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Infrastructure development",
      "Clean water access",
      "Local industry support"
    ],
    "education": "Masters",
    "assetsWorth": 14582220,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980474181",
      "email": "manjita_shrestha@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-3-5-2"
  },
  {
    "id": "candidate-3-5-3-1",
    "name": "Priya Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_chhetri.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Infrastructure development",
      "Tourism promotion",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 21922552,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985575911",
      "email": "priya_chhetri@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 9.2,
    "constituencyId": "constituency-3-5-3"
  },
  {
    "id": "candidate-3-5-3-2",
    "name": "Anita Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_karki.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Education reform",
      "Road construction",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 11394196,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984841485",
      "email": "anita_karki@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-3-5-3"
  },
  {
    "id": "candidate-3-5-4-1",
    "name": "Sabita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Healthcare improvement",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 23821985,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983518908",
      "email": "sabita_yadav@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 5.4,
    "constituencyId": "constituency-3-5-4"
  },
  {
    "id": "candidate-3-5-4-2",
    "name": "Dipak Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/dipak_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Infrastructure development",
      "Flood control",
      "Electricity expansion"
    ],
    "education": "Masters",
    "assetsWorth": 3162467,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987336230",
      "email": "dipak_pokharel@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 5.7,
    "constituencyId": "constituency-3-5-4"
  },
  {
    "id": "candidate-3-5-5-1",
    "name": "Ram Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_rai.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Flood control",
      "Education reform",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 29117020,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981328033",
      "email": "ram_rai@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 5.9,
    "constituencyId": "constituency-3-5-5"
  },
  {
    "id": "candidate-3-5-5-2",
    "name": "Prakash Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Infrastructure development",
      "Electricity expansion"
    ],
    "education": "High School",
    "assetsWorth": 22067762,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988459719",
      "email": "prakash_bhatt@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 5.6,
    "constituencyId": "constituency-3-5-5"
  },
  {
    "id": "candidate-3-5-6-1",
    "name": "Krishna Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_subedi.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Forest conservation",
      "Clean water access",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 27482531,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982959600",
      "email": "krishna_subedi@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-3-5-6"
  },
  {
    "id": "candidate-3-5-6-2",
    "name": "Anita Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Local industry support",
      "Women empowerment",
      "Healthcare improvement"
    ],
    "education": "High School",
    "assetsWorth": 24141070,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982332610",
      "email": "anita_subedi@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-3-5-6"
  },
  {
    "id": "candidate-3-5-7-1",
    "name": "Gita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Anti-corruption measures",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 28072057,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981297949",
      "email": "gita_pandey@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 6.5,
    "constituencyId": "constituency-3-5-7"
  },
  {
    "id": "candidate-3-5-7-2",
    "name": "Sita Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_pokharel.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Agricultural support",
      "Infrastructure development",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 22344552,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984226969",
      "email": "sita_pokharel@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-3-5-7"
  },
  {
    "id": "candidate-3-5-8-1",
    "name": "Hari Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Clean water access",
      "Digital connectivity",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 11881069,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987592421",
      "email": "hari_chhetri@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-3-5-8"
  },
  {
    "id": "candidate-3-5-8-2",
    "name": "Manjita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_shrestha.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Forest conservation",
      "Healthcare improvement",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 27207979,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987006635",
      "email": "manjita_shrestha@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-3-5-8"
  },
  {
    "id": "candidate-3-5-9-1",
    "name": "Maya Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_shrestha.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Education reform",
      "Healthcare improvement",
      "Women empowerment"
    ],
    "education": "Masters",
    "assetsWorth": 16133511,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987118317",
      "email": "maya_shrestha@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 9.0,
    "constituencyId": "constituency-3-5-9"
  },
  {
    "id": "candidate-3-5-9-2",
    "name": "Ramesh Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Youth development",
      "Agricultural support",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 2916562,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982306686",
      "email": "ramesh_rai@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-3-5-9"
  },
  {
    "id": "candidate-3-5-10-1",
    "name": "Gita Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_pokharel.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Clean water access",
      "Road construction",
      "Infrastructure development"
    ],
    "education": "PhD",
    "assetsWorth": 5728234,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985851294",
      "email": "gita_pokharel@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-3-5-10"
  },
  {
    "id": "candidate-3-5-10-2",
    "name": "Maya Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Tourism promotion",
      "Education reform",
      "Youth development"
    ],
    "education": "Bachelors",
    "assetsWorth": 26145228,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984983935",
      "email": "maya_gurung@example.com",
      "address": "Kathmandu, Bagmati"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-3-5-10"
  },
  {
    "id": "candidate-3-6-1-1",
    "name": "Suman Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Forest conservation",
      "Electricity expansion"
    ],
    "education": "High School",
    "assetsWorth": 25458656,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982196254",
      "email": "suman_shrestha@example.com",
      "address": "Kavrepalanchok, Bagmati"
    },
    "publicScoreRating": 7.4,
    "constituencyId": "constituency-3-6-1"
  },
  {
    "id": "candidate-3-6-1-2",
    "name": "Ram Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_pokharel.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Tourism promotion",
      "Healthcare improvement",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 18528261,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980835232",
      "email": "ram_pokharel@example.com",
      "address": "Kavrepalanchok, Bagmati"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-3-6-1"
  },
  {
    "id": "candidate-3-6-2-1",
    "name": "Ramesh Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Flood control",
      "Education reform",
      "Infrastructure development"
    ],
    "education": "Bachelors",
    "assetsWorth": 29453125,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980470872",
      "email": "ramesh_pokharel@example.com",
      "address": "Kavrepalanchok, Bagmati"
    },
    "publicScoreRating": 4.6,
    "constituencyId": "constituency-3-6-2"
  },
  {
    "id": "candidate-3-6-2-2",
    "name": "Prakash Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Forest conservation",
      "Flood control",
      "Infrastructure development"
    ],
    "education": "MBA",
    "assetsWorth": 18070737,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985845975",
      "email": "prakash_bhatt@example.com",
      "address": "Kavrepalanchok, Bagmati"
    },
    "publicScoreRating": 5.5,
    "constituencyId": "constituency-3-6-2"
  },
  {
    "id": "candidate-3-7-1-1",
    "name": "Asha Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Infrastructure development",
      "Clean water access",
      "Healthcare improvement"
    ],
    "education": "MBA",
    "assetsWorth": 7266333,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984314614",
      "email": "asha_gurung@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-3-7-1"
  },
  {
    "id": "candidate-3-7-1-2",
    "name": "Raj Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_pandey.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Education reform",
      "Infrastructure development",
      "Flood control"
    ],
    "education": "Bachelors",
    "assetsWorth": 8672772,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980516311",
      "email": "raj_pandey@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 6.4,
    "constituencyId": "constituency-3-7-1"
  },
  {
    "id": "candidate-3-7-2-1",
    "name": "Suraj Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Electricity expansion",
      "Road construction",
      "Digital connectivity"
    ],
    "education": "PhD",
    "assetsWorth": 27807894,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983211265",
      "email": "suraj_bhatt@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-3-7-2"
  },
  {
    "id": "candidate-3-7-2-2",
    "name": "Prakash Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Digital connectivity",
      "Forest conservation",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 18484663,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988480532",
      "email": "prakash_rai@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-3-7-2"
  },
  {
    "id": "candidate-3-7-3-1",
    "name": "Kunti Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_bhatt.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Clean water access",
      "Infrastructure development",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 22095947,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982157501",
      "email": "kunti_bhatt@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-3-7-3"
  },
  {
    "id": "candidate-3-7-3-2",
    "name": "Sujata Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Digital connectivity",
      "Electricity expansion",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 9971510,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981412630",
      "email": "sujata_shrestha@example.com",
      "address": "Lalitpur, Bagmati"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-3-7-3"
  },
  {
    "id": "candidate-3-8-1-1",
    "name": "Sujata Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_yadav.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Electricity expansion",
      "Agricultural support",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 27364499,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989363047",
      "email": "sujata_yadav@example.com",
      "address": "Nuwakot, Bagmati"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-3-8-1"
  },
  {
    "id": "candidate-3-8-1-2",
    "name": "Bishal Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_subedi.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Women empowerment"
    ],
    "education": "Masters",
    "assetsWorth": 20410966,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982736197",
      "email": "bishal_subedi@example.com",
      "address": "Nuwakot, Bagmati"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-3-8-1"
  },
  {
    "id": "candidate-3-8-2-1",
    "name": "Anita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_adhikari.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Tourism promotion",
      "Agricultural support",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 12517641,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988910049",
      "email": "anita_adhikari@example.com",
      "address": "Nuwakot, Bagmati"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-3-8-2"
  },
  {
    "id": "candidate-3-8-2-2",
    "name": "Sita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_shrestha.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Road construction",
      "Infrastructure development",
      "Anti-corruption measures"
    ],
    "education": "High School",
    "assetsWorth": 16996196,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988151668",
      "email": "sita_shrestha@example.com",
      "address": "Nuwakot, Bagmati"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-3-8-2"
  },
  {
    "id": "candidate-3-9-1-1",
    "name": "Kunti Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_pandey.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Healthcare improvement",
      "Tourism promotion"
    ],
    "education": "PhD",
    "assetsWorth": 13941433,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981772497",
      "email": "kunti_pandey@example.com",
      "address": "Ramechhap, Bagmati"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-3-9-1"
  },
  {
    "id": "candidate-3-9-1-2",
    "name": "Kunti Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_subedi.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Job creation",
      "Local industry support",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 12970934,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983800593",
      "email": "kunti_subedi@example.com",
      "address": "Ramechhap, Bagmati"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-3-9-1"
  },
  {
    "id": "candidate-3-10-1-1",
    "name": "Sunita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Flood control",
      "Women empowerment",
      "Local industry support"
    ],
    "education": "Bachelors",
    "assetsWorth": 17498571,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980850455",
      "email": "sunita_gurung@example.com",
      "address": "Rasuwa, Bagmati"
    },
    "publicScoreRating": 6.7,
    "constituencyId": "constituency-3-10-1"
  },
  {
    "id": "candidate-3-10-1-2",
    "name": "Anita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_shrestha.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Education reform",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 20710717,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982715520",
      "email": "anita_shrestha@example.com",
      "address": "Rasuwa, Bagmati"
    },
    "publicScoreRating": 6.7,
    "constituencyId": "constituency-3-10-1"
  },
  {
    "id": "candidate-3-11-1-1",
    "name": "Gita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_yadav.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Infrastructure development",
      "Healthcare improvement",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 12206219,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984945703",
      "email": "gita_yadav@example.com",
      "address": "Sindhuli, Bagmati"
    },
    "publicScoreRating": 8.2,
    "constituencyId": "constituency-3-11-1"
  },
  {
    "id": "candidate-3-11-1-2",
    "name": "Prakash Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Electricity expansion",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 13176978,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980083235",
      "email": "prakash_pokharel@example.com",
      "address": "Sindhuli, Bagmati"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-3-11-1"
  },
  {
    "id": "candidate-3-11-2-1",
    "name": "Kunti Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_rai.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Women empowerment",
      "Education reform",
      "Tourism promotion"
    ],
    "education": "MBA",
    "assetsWorth": 17389958,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984061354",
      "email": "kunti_rai@example.com",
      "address": "Sindhuli, Bagmati"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-3-11-2"
  },
  {
    "id": "candidate-3-11-2-2",
    "name": "Manjita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_maharjan.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Clean water access",
      "Infrastructure development",
      "Youth development"
    ],
    "education": "High School",
    "assetsWorth": 26129767,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980549825",
      "email": "manjita_maharjan@example.com",
      "address": "Sindhuli, Bagmati"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-3-11-2"
  },
  {
    "id": "candidate-3-12-1-1",
    "name": "Maya Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Clean water access",
      "Anti-corruption measures",
      "Road construction"
    ],
    "education": "Masters",
    "assetsWorth": 13950569,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982726032",
      "email": "maya_thapa@example.com",
      "address": "Sindhupalchok, Bagmati"
    },
    "publicScoreRating": 4.0,
    "constituencyId": "constituency-3-12-1"
  },
  {
    "id": "candidate-3-12-1-2",
    "name": "Krishna Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pokharel.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Youth development",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 6225969,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986393150",
      "email": "krishna_pokharel@example.com",
      "address": "Sindhupalchok, Bagmati"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-3-12-1"
  },
  {
    "id": "candidate-3-12-2-1",
    "name": "Sabita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_shrestha.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Education reform"
    ],
    "education": "Masters",
    "assetsWorth": 18585754,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986749179",
      "email": "sabita_shrestha@example.com",
      "address": "Sindhupalchok, Bagmati"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-3-12-2"
  },
  {
    "id": "candidate-3-12-2-2",
    "name": "Raj Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Youth development",
      "Tourism promotion",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 28919702,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985192846",
      "email": "raj_thapa@example.com",
      "address": "Sindhupalchok, Bagmati"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-3-12-2"
  },
  {
    "id": "candidate-4-1-1-1",
    "name": "Suman Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_rai.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Tourism promotion",
      "Anti-corruption measures",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 10587821,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983237386",
      "email": "suman_rai@example.com",
      "address": "Gorkha, Gandaki"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-4-1-1"
  },
  {
    "id": "candidate-4-1-1-2",
    "name": "Ramesh Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Flood control",
      "Local industry support",
      "Forest conservation"
    ],
    "education": "Masters",
    "assetsWorth": 17059358,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987571841",
      "email": "ramesh_karki@example.com",
      "address": "Gorkha, Gandaki"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-4-1-1"
  },
  {
    "id": "candidate-4-1-2-1",
    "name": "Asha Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Healthcare improvement",
      "Clean water access",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 23416697,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983373957",
      "email": "asha_yadav@example.com",
      "address": "Gorkha, Gandaki"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-4-1-2"
  },
  {
    "id": "candidate-4-1-2-2",
    "name": "Ram Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_shrestha.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Youth development",
      "Healthcare improvement",
      "Road construction"
    ],
    "education": "MBA",
    "assetsWorth": 13977033,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987663559",
      "email": "ram_shrestha@example.com",
      "address": "Gorkha, Gandaki"
    },
    "publicScoreRating": 5.4,
    "constituencyId": "constituency-4-1-2"
  },
  {
    "id": "candidate-4-2-1-1",
    "name": "Ramesh Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_thapa.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Job creation",
      "Forest conservation",
      "Infrastructure development"
    ],
    "education": "Masters",
    "assetsWorth": 4988743,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984003236",
      "email": "ramesh_thapa@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 6.1,
    "constituencyId": "constituency-4-2-1"
  },
  {
    "id": "candidate-4-2-1-2",
    "name": "Priya Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_adhikari.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Electricity expansion",
      "Clean water access",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 20297662,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983305265",
      "email": "priya_adhikari@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 8.9,
    "constituencyId": "constituency-4-2-1"
  },
  {
    "id": "candidate-4-2-2-1",
    "name": "Suman Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Tourism promotion",
      "Forest conservation",
      "Infrastructure development"
    ],
    "education": "High School",
    "assetsWorth": 7527786,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989547580",
      "email": "suman_pandey@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-4-2-2"
  },
  {
    "id": "candidate-4-2-2-2",
    "name": "Manjita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_adhikari.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Electricity expansion",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 28203418,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989954480",
      "email": "manjita_adhikari@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-4-2-2"
  },
  {
    "id": "candidate-4-2-3-1",
    "name": "Gita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Women empowerment",
      "Flood control",
      "Healthcare improvement"
    ],
    "education": "MBA",
    "assetsWorth": 16981833,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983997468",
      "email": "gita_thapa@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 9.1,
    "constituencyId": "constituency-4-2-3"
  },
  {
    "id": "candidate-4-2-3-2",
    "name": "Anita Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_chhetri.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Agricultural support",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 21815440,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985814038",
      "email": "anita_chhetri@example.com",
      "address": "Kaski, Gandaki"
    },
    "publicScoreRating": 6.7,
    "constituencyId": "constituency-4-2-3"
  },
  {
    "id": "candidate-4-3-1-1",
    "name": "Ramesh Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_pandey.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Agricultural support",
      "Tourism promotion",
      "Digital connectivity"
    ],
    "education": "High School",
    "assetsWorth": 16724347,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983484000",
      "email": "ramesh_pandey@example.com",
      "address": "Lamjung, Gandaki"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-4-3-1"
  },
  {
    "id": "candidate-4-3-1-2",
    "name": "Prakash Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Forest conservation",
      "Education reform",
      "Healthcare improvement"
    ],
    "education": "Bachelors",
    "assetsWorth": 16518280,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987338055",
      "email": "prakash_maharjan@example.com",
      "address": "Lamjung, Gandaki"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-4-3-1"
  },
  {
    "id": "candidate-4-4-1-1",
    "name": "Priya Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_adhikari.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Job creation",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 2740020,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982721684",
      "email": "priya_adhikari@example.com",
      "address": "Manang, Gandaki"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-4-4-1"
  },
  {
    "id": "candidate-4-4-1-2",
    "name": "Raj Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_subedi.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Anti-corruption measures",
      "Agricultural support",
      "Electricity expansion"
    ],
    "education": "Masters",
    "assetsWorth": 21443888,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989131563",
      "email": "raj_subedi@example.com",
      "address": "Manang, Gandaki"
    },
    "publicScoreRating": 4.4,
    "constituencyId": "constituency-4-4-1"
  },
  {
    "id": "candidate-4-5-1-1",
    "name": "Sunita Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_subedi.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Tourism promotion",
      "Flood control",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 14996665,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985645909",
      "email": "sunita_subedi@example.com",
      "address": "Mustang, Gandaki"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-4-5-1"
  },
  {
    "id": "candidate-4-5-1-2",
    "name": "Anita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_yadav.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Job creation",
      "Forest conservation",
      "Youth development"
    ],
    "education": "Bachelors",
    "assetsWorth": 9949015,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989945820",
      "email": "anita_yadav@example.com",
      "address": "Mustang, Gandaki"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-4-5-1"
  },
  {
    "id": "candidate-4-6-1-1",
    "name": "Bishal Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Infrastructure development",
      "Education reform",
      "Electricity expansion"
    ],
    "education": "Masters",
    "assetsWorth": 5842884,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981785138",
      "email": "bishal_bhatt@example.com",
      "address": "Myagdi, Gandaki"
    },
    "publicScoreRating": 7.6,
    "constituencyId": "constituency-4-6-1"
  },
  {
    "id": "candidate-4-6-1-2",
    "name": "Anita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_bhatt.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Flood control",
      "Infrastructure development"
    ],
    "education": "MBA",
    "assetsWorth": 14017793,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982537620",
      "email": "anita_bhatt@example.com",
      "address": "Myagdi, Gandaki"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-4-6-1"
  },
  {
    "id": "candidate-4-7-1-1",
    "name": "Suman Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_subedi.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Tourism promotion",
      "Road construction",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 4469375,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985172935",
      "email": "suman_subedi@example.com",
      "address": "Nawalpur, Gandaki"
    },
    "publicScoreRating": 4.6,
    "constituencyId": "constituency-4-7-1"
  },
  {
    "id": "candidate-4-7-1-2",
    "name": "Maya Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Clean water access",
      "Youth development",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 1802956,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988417397",
      "email": "maya_chhetri@example.com",
      "address": "Nawalpur, Gandaki"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-4-7-1"
  },
  {
    "id": "candidate-4-7-2-1",
    "name": "Narayan Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_chhetri.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Forest conservation",
      "Anti-corruption measures",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 6673705,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981428377",
      "email": "narayan_chhetri@example.com",
      "address": "Nawalpur, Gandaki"
    },
    "publicScoreRating": 5.7,
    "constituencyId": "constituency-4-7-2"
  },
  {
    "id": "candidate-4-7-2-2",
    "name": "Narayan Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_subedi.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Road construction",
      "Electricity expansion",
      "Agricultural support"
    ],
    "education": "PhD",
    "assetsWorth": 18250988,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986473042",
      "email": "narayan_subedi@example.com",
      "address": "Nawalpur, Gandaki"
    },
    "publicScoreRating": 6.5,
    "constituencyId": "constituency-4-7-2"
  },
  {
    "id": "candidate-4-8-1-1",
    "name": "Bikram Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_pokharel.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Local industry support",
      "Road construction",
      "Healthcare improvement"
    ],
    "education": "High School",
    "assetsWorth": 15776022,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981746558",
      "email": "bikram_pokharel@example.com",
      "address": "Parbat, Gandaki"
    },
    "publicScoreRating": 6.0,
    "constituencyId": "constituency-4-8-1"
  },
  {
    "id": "candidate-4-8-1-2",
    "name": "Krishna Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Women empowerment",
      "Agricultural support",
      "Local industry support"
    ],
    "education": "Bachelors",
    "assetsWorth": 25697915,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988498965",
      "email": "krishna_pandey@example.com",
      "address": "Parbat, Gandaki"
    },
    "publicScoreRating": 5.9,
    "constituencyId": "constituency-4-8-1"
  },
  {
    "id": "candidate-4-9-1-1",
    "name": "Prakash Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_bhatt.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Electricity expansion",
      "Tourism promotion",
      "Road construction"
    ],
    "education": "MBA",
    "assetsWorth": 25559886,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988327841",
      "email": "prakash_bhatt@example.com",
      "address": "Syangja, Gandaki"
    },
    "publicScoreRating": 7.4,
    "constituencyId": "constituency-4-9-1"
  },
  {
    "id": "candidate-4-9-1-2",
    "name": "Priya Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_rai.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Healthcare improvement",
      "Anti-corruption measures",
      "Clean water access"
    ],
    "education": "Bachelors",
    "assetsWorth": 25666540,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988703651",
      "email": "priya_rai@example.com",
      "address": "Syangja, Gandaki"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-4-9-1"
  },
  {
    "id": "candidate-4-9-2-1",
    "name": "Maya Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_shrestha.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Electricity expansion",
      "Infrastructure development",
      "Clean water access"
    ],
    "education": "PhD",
    "assetsWorth": 25997184,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980071791",
      "email": "maya_shrestha@example.com",
      "address": "Syangja, Gandaki"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-4-9-2"
  },
  {
    "id": "candidate-4-9-2-2",
    "name": "Bikram Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_yadav.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Tourism promotion",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 14181900,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986019834",
      "email": "bikram_yadav@example.com",
      "address": "Syangja, Gandaki"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-4-9-2"
  },
  {
    "id": "candidate-4-10-1-1",
    "name": "Anita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_bhatt.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Forest conservation",
      "Local industry support",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 27146137,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984241348",
      "email": "anita_bhatt@example.com",
      "address": "Tanahun, Gandaki"
    },
    "publicScoreRating": 9.1,
    "constituencyId": "constituency-4-10-1"
  },
  {
    "id": "candidate-4-10-1-2",
    "name": "Dipak Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/dipak_gurung.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Flood control",
      "Electricity expansion",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 25822645,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986486429",
      "email": "dipak_gurung@example.com",
      "address": "Tanahun, Gandaki"
    },
    "publicScoreRating": 9.0,
    "constituencyId": "constituency-4-10-1"
  },
  {
    "id": "candidate-4-10-2-1",
    "name": "Raj Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_yadav.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Forest conservation",
      "Local industry support",
      "Electricity expansion"
    ],
    "education": "Bachelors",
    "assetsWorth": 26251416,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986760609",
      "email": "raj_yadav@example.com",
      "address": "Tanahun, Gandaki"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-4-10-2"
  },
  {
    "id": "candidate-4-10-2-2",
    "name": "Ramesh Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_bhatt.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Job creation",
      "Women empowerment",
      "Healthcare improvement"
    ],
    "education": "High School",
    "assetsWorth": 29791002,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983224638",
      "email": "ramesh_bhatt@example.com",
      "address": "Tanahun, Gandaki"
    },
    "publicScoreRating": 9.0,
    "constituencyId": "constituency-4-10-2"
  },
  {
    "id": "candidate-5-1-1-1",
    "name": "Asha Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Digital connectivity"
    ],
    "education": "Bachelors",
    "assetsWorth": 11750413,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987456852",
      "email": "asha_thapa@example.com",
      "address": "Arghakhanchi, Lumbini"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-5-1-1"
  },
  {
    "id": "candidate-5-1-1-2",
    "name": "Asha Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_pokharel.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Agricultural support",
      "Healthcare improvement"
    ],
    "education": "PhD",
    "assetsWorth": 12703125,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988236450",
      "email": "asha_pokharel@example.com",
      "address": "Arghakhanchi, Lumbini"
    },
    "publicScoreRating": 5.6,
    "constituencyId": "constituency-5-1-1"
  },
  {
    "id": "candidate-5-2-1-1",
    "name": "Sunita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_thapa.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Women empowerment",
      "Infrastructure development"
    ],
    "education": "Masters",
    "assetsWorth": 18338733,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980708428",
      "email": "sunita_thapa@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-5-2-1"
  },
  {
    "id": "candidate-5-2-1-2",
    "name": "Sunita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_pandey.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 11783604,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986356060",
      "email": "sunita_pandey@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-5-2-1"
  },
  {
    "id": "candidate-5-2-2-1",
    "name": "Sunita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_shrestha.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Clean water access",
      "Youth development",
      "Electricity expansion"
    ],
    "education": "Bachelors",
    "assetsWorth": 17721823,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984690187",
      "email": "sunita_shrestha@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 8.6,
    "constituencyId": "constituency-5-2-2"
  },
  {
    "id": "candidate-5-2-2-2",
    "name": "Ram Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_karki.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Healthcare improvement",
      "Women empowerment"
    ],
    "education": "MBA",
    "assetsWorth": 2114530,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986185867",
      "email": "ram_karki@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-5-2-2"
  },
  {
    "id": "candidate-5-2-3-1",
    "name": "Sujata Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_bhatt.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Flood control",
      "Healthcare improvement",
      "Women empowerment"
    ],
    "education": "Bachelors",
    "assetsWorth": 11231789,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987939038",
      "email": "sujata_bhatt@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 8.9,
    "constituencyId": "constituency-5-2-3"
  },
  {
    "id": "candidate-5-2-3-2",
    "name": "Dipak Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/dipak_subedi.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Clean water access",
      "Road construction",
      "Local industry support"
    ],
    "education": "Masters",
    "assetsWorth": 29126194,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981908103",
      "email": "dipak_subedi@example.com",
      "address": "Banke, Lumbini"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-5-2-3"
  },
  {
    "id": "candidate-5-3-1-1",
    "name": "Suman Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_thapa.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Road construction",
      "Local industry support",
      "Education reform"
    ],
    "education": "High School",
    "assetsWorth": 17120616,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983623057",
      "email": "suman_thapa@example.com",
      "address": "Bardiya, Lumbini"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-5-3-1"
  },
  {
    "id": "candidate-5-3-1-2",
    "name": "Asha Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Job creation",
      "Women empowerment",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 5449236,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980884583",
      "email": "asha_yadav@example.com",
      "address": "Bardiya, Lumbini"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-5-3-1"
  },
  {
    "id": "candidate-5-3-2-1",
    "name": "Kamal Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_shrestha.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Electricity expansion",
      "Women empowerment",
      "Healthcare improvement"
    ],
    "education": "PhD",
    "assetsWorth": 27366316,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986896865",
      "email": "kamal_shrestha@example.com",
      "address": "Bardiya, Lumbini"
    },
    "publicScoreRating": 4.4,
    "constituencyId": "constituency-5-3-2"
  },
  {
    "id": "candidate-5-3-2-2",
    "name": "Sujata Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_maharjan.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Flood control",
      "Healthcare improvement"
    ],
    "education": "Masters",
    "assetsWorth": 9061970,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980865385",
      "email": "sujata_maharjan@example.com",
      "address": "Bardiya, Lumbini"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-5-3-2"
  },
  {
    "id": "candidate-5-4-1-1",
    "name": "Krishna Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_gurung.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Youth development",
      "Road construction",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 4745186,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985587752",
      "email": "krishna_gurung@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-5-4-1"
  },
  {
    "id": "candidate-5-4-1-2",
    "name": "Suraj Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_pokharel.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Job creation",
      "Agricultural support",
      "Forest conservation"
    ],
    "education": "PhD",
    "assetsWorth": 13211760,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987928908",
      "email": "suraj_pokharel@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-5-4-1"
  },
  {
    "id": "candidate-5-4-2-1",
    "name": "Suman Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_maharjan.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Education reform",
      "Agricultural support",
      "Clean water access"
    ],
    "education": "Masters",
    "assetsWorth": 23457948,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989986027",
      "email": "suman_maharjan@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 8.3,
    "constituencyId": "constituency-5-4-2"
  },
  {
    "id": "candidate-5-4-2-2",
    "name": "Anita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_shrestha.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Local industry support",
      "Infrastructure development",
      "Forest conservation"
    ],
    "education": "PhD",
    "assetsWorth": 26315757,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986666711",
      "email": "anita_shrestha@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-5-4-2"
  },
  {
    "id": "candidate-5-4-3-1",
    "name": "Sita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_rai.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Clean water access",
      "Youth development"
    ],
    "education": "High School",
    "assetsWorth": 16151727,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988281866",
      "email": "sita_rai@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-5-4-3"
  },
  {
    "id": "candidate-5-4-3-2",
    "name": "Bikram Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_karki.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Education reform",
      "Job creation",
      "Healthcare improvement"
    ],
    "education": "PhD",
    "assetsWorth": 17367419,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985354314",
      "email": "bikram_karki@example.com",
      "address": "Dang, Lumbini"
    },
    "publicScoreRating": 6.2,
    "constituencyId": "constituency-5-4-3"
  },
  {
    "id": "candidate-5-5-1-1",
    "name": "Prakash Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_adhikari.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Women empowerment",
      "Job creation",
      "Electricity expansion"
    ],
    "education": "PhD",
    "assetsWorth": 12763284,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983600982",
      "email": "prakash_adhikari@example.com",
      "address": "Eastern Rukum, Lumbini"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-5-5-1"
  },
  {
    "id": "candidate-5-5-1-2",
    "name": "Krishna Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_shrestha.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Anti-corruption measures",
      "Road construction",
      "Flood control"
    ],
    "education": "Masters",
    "assetsWorth": 7470819,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989082077",
      "email": "krishna_shrestha@example.com",
      "address": "Eastern Rukum, Lumbini"
    },
    "publicScoreRating": 4.0,
    "constituencyId": "constituency-5-5-1"
  },
  {
    "id": "candidate-5-6-1-1",
    "name": "Ramesh Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_karki.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Women empowerment",
      "Tourism promotion",
      "Job creation"
    ],
    "education": "Masters",
    "assetsWorth": 16964433,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980438149",
      "email": "ramesh_karki@example.com",
      "address": "Gulmi, Lumbini"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-5-6-1"
  },
  {
    "id": "candidate-5-6-1-2",
    "name": "Raj Rai",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Infrastructure development",
      "Local industry support",
      "Forest conservation"
    ],
    "education": "PhD",
    "assetsWorth": 7165859,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987163229",
      "email": "raj_rai@example.com",
      "address": "Gulmi, Lumbini"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-5-6-1"
  },
  {
    "id": "candidate-5-6-2-1",
    "name": "Sita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/sita_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Forest conservation",
      "Flood control"
    ],
    "education": "Bachelors",
    "assetsWorth": 8112746,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984483090",
      "email": "sita_maharjan@example.com",
      "address": "Gulmi, Lumbini"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-5-6-2"
  },
  {
    "id": "candidate-5-6-2-2",
    "name": "Raj Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_subedi.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Agricultural support",
      "Tourism promotion",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 7513207,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983189268",
      "email": "raj_subedi@example.com",
      "address": "Gulmi, Lumbini"
    },
    "publicScoreRating": 5.6,
    "constituencyId": "constituency-5-6-2"
  },
  {
    "id": "candidate-5-7-1-1",
    "name": "Manjita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_shrestha.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Infrastructure development",
      "Women empowerment",
      "Digital connectivity"
    ],
    "education": "MBA",
    "assetsWorth": 19647978,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989807663",
      "email": "manjita_shrestha@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-5-7-1"
  },
  {
    "id": "candidate-5-7-1-2",
    "name": "Bikram Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_chhetri.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Clean water access",
      "Flood control",
      "Forest conservation"
    ],
    "education": "Bachelors",
    "assetsWorth": 8137360,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987821599",
      "email": "bikram_chhetri@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-5-7-1"
  },
  {
    "id": "candidate-5-7-2-1",
    "name": "Kunti Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_gurung.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Healthcare improvement",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 10465081,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987151350",
      "email": "kunti_gurung@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-5-7-2"
  },
  {
    "id": "candidate-5-7-2-2",
    "name": "Ramesh Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_thapa.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Job creation",
      "Healthcare improvement",
      "Agricultural support"
    ],
    "education": "PhD",
    "assetsWorth": 11671578,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983077986",
      "email": "ramesh_thapa@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 4.5,
    "constituencyId": "constituency-5-7-2"
  },
  {
    "id": "candidate-5-7-3-1",
    "name": "Bikram Pokharel",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Women empowerment",
      "Local industry support"
    ],
    "education": "MBA",
    "assetsWorth": 8192739,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982130915",
      "email": "bikram_pokharel@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-5-7-3"
  },
  {
    "id": "candidate-5-7-3-2",
    "name": "Krishna Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_chhetri.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Anti-corruption measures",
      "Forest conservation",
      "Tourism promotion"
    ],
    "education": "MBA",
    "assetsWorth": 12653110,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988151272",
      "email": "krishna_chhetri@example.com",
      "address": "Kapilvastu, Lumbini"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-5-7-3"
  },
  {
    "id": "candidate-5-8-1-1",
    "name": "Raj Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_adhikari.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Healthcare improvement",
      "Agricultural support",
      "Road construction"
    ],
    "education": "Masters",
    "assetsWorth": 16560335,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984845360",
      "email": "raj_adhikari@example.com",
      "address": "Nawalparasi, Lumbini"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-5-8-1"
  },
  {
    "id": "candidate-5-8-1-2",
    "name": "Sunita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Digital connectivity",
      "Local industry support",
      "Electricity expansion"
    ],
    "education": "MBA",
    "assetsWorth": 13183892,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984542561",
      "email": "sunita_thapa@example.com",
      "address": "Nawalparasi, Lumbini"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-5-8-1"
  },
  {
    "id": "candidate-5-8-2-1",
    "name": "Gita Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_adhikari.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Digital connectivity",
      "Healthcare improvement",
      "Forest conservation"
    ],
    "education": "Bachelors",
    "assetsWorth": 5729733,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985924220",
      "email": "gita_adhikari@example.com",
      "address": "Nawalparasi, Lumbini"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-5-8-2"
  },
  {
    "id": "candidate-5-8-2-2",
    "name": "Priya Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_yadav.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Local industry support",
      "Forest conservation",
      "Flood control"
    ],
    "education": "High School",
    "assetsWorth": 4772857,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984345223",
      "email": "priya_yadav@example.com",
      "address": "Nawalparasi, Lumbini"
    },
    "publicScoreRating": 5.9,
    "constituencyId": "constituency-5-8-2"
  },
  {
    "id": "candidate-5-9-1-1",
    "name": "Kunti Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_bhatt.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Women empowerment",
      "Tourism promotion"
    ],
    "education": "PhD",
    "assetsWorth": 15172931,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987758045",
      "email": "kunti_bhatt@example.com",
      "address": "Palpa, Lumbini"
    },
    "publicScoreRating": 7.6,
    "constituencyId": "constituency-5-9-1"
  },
  {
    "id": "candidate-5-9-1-2",
    "name": "Sujata Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Clean water access",
      "Agricultural support",
      "Job creation"
    ],
    "education": "Bachelors",
    "assetsWorth": 5769376,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987549071",
      "email": "sujata_gurung@example.com",
      "address": "Palpa, Lumbini"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-5-9-1"
  },
  {
    "id": "candidate-5-10-1-1",
    "name": "Krishna Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_subedi.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Forest conservation",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 12141695,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981467597",
      "email": "krishna_subedi@example.com",
      "address": "Pyuthan, Lumbini"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-5-10-1"
  },
  {
    "id": "candidate-5-10-1-2",
    "name": "Asha Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_bhatt.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Digital connectivity",
      "Job creation",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 27881694,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987127058",
      "email": "asha_bhatt@example.com",
      "address": "Pyuthan, Lumbini"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-5-10-1"
  },
  {
    "id": "candidate-5-11-1-1",
    "name": "Sujata Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Local industry support",
      "Digital connectivity",
      "Anti-corruption measures"
    ],
    "education": "MBA",
    "assetsWorth": 12046924,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982560908",
      "email": "sujata_shrestha@example.com",
      "address": "Rolpa, Lumbini"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-5-11-1"
  },
  {
    "id": "candidate-5-11-1-2",
    "name": "Hari Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Digital connectivity",
      "Women empowerment"
    ],
    "education": "High School",
    "assetsWorth": 26443128,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982204432",
      "email": "hari_maharjan@example.com",
      "address": "Rolpa, Lumbini"
    },
    "publicScoreRating": 8.8,
    "constituencyId": "constituency-5-11-1"
  },
  {
    "id": "candidate-5-12-1-1",
    "name": "Sabita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/sabita_gurung.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Forest conservation",
      "Digital connectivity",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 25741546,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982710370",
      "email": "sabita_gurung@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 7.5,
    "constituencyId": "constituency-5-12-1"
  },
  {
    "id": "candidate-5-12-1-2",
    "name": "Prakash Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Anti-corruption measures"
    ],
    "education": "Masters",
    "assetsWorth": 8841616,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981839916",
      "email": "prakash_shrestha@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-5-12-1"
  },
  {
    "id": "candidate-5-12-2-1",
    "name": "Prakash Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Electricity expansion",
      "Agricultural support",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 19101017,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983770354",
      "email": "prakash_gurung@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-5-12-2"
  },
  {
    "id": "candidate-5-12-2-2",
    "name": "Bishal Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Agricultural support",
      "Clean water access",
      "Flood control"
    ],
    "education": "Masters",
    "assetsWorth": 19293856,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989521321",
      "email": "bishal_karki@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 4.9,
    "constituencyId": "constituency-5-12-2"
  },
  {
    "id": "candidate-5-12-3-1",
    "name": "Kamal Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Electricity expansion",
      "Road construction"
    ],
    "education": "MBA",
    "assetsWorth": 17138560,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982378834",
      "email": "kamal_pandey@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-5-12-3"
  },
  {
    "id": "candidate-5-12-3-2",
    "name": "Bikram Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_bhatt.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Job creation",
      "Forest conservation",
      "Anti-corruption measures"
    ],
    "education": "MBA",
    "assetsWorth": 19328473,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984184554",
      "email": "bikram_bhatt@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-5-12-3"
  },
  {
    "id": "candidate-5-12-4-1",
    "name": "Anita Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/anita_gurung.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Local industry support",
      "Anti-corruption measures",
      "Healthcare improvement"
    ],
    "education": "Masters",
    "assetsWorth": 26083919,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985599069",
      "email": "anita_gurung@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 9.2,
    "constituencyId": "constituency-5-12-4"
  },
  {
    "id": "candidate-5-12-4-2",
    "name": "Maya Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Education reform",
      "Tourism promotion",
      "Healthcare improvement"
    ],
    "education": "PhD",
    "assetsWorth": 1799712,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986911881",
      "email": "maya_gurung@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-5-12-4"
  },
  {
    "id": "candidate-5-12-5-1",
    "name": "Sujata Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_subedi.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Electricity expansion",
      "Agricultural support"
    ],
    "education": "Masters",
    "assetsWorth": 9674459,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981001964",
      "email": "sujata_subedi@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-5-12-5"
  },
  {
    "id": "candidate-5-12-5-2",
    "name": "Priya Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Forest conservation",
      "Clean water access",
      "Electricity expansion"
    ],
    "education": "PhD",
    "assetsWorth": 27238875,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984568893",
      "email": "priya_pandey@example.com",
      "address": "Rupandehi, Lumbini"
    },
    "publicScoreRating": 4.3,
    "constituencyId": "constituency-5-12-5"
  },
  {
    "id": "candidate-6-1-1-1",
    "name": "Bishal Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_subedi.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Education reform",
      "Forest conservation"
    ],
    "education": "Bachelors",
    "assetsWorth": 22553055,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981015609",
      "email": "bishal_subedi@example.com",
      "address": "Dailekh, Karnali"
    },
    "publicScoreRating": 8.5,
    "constituencyId": "constituency-6-1-1"
  },
  {
    "id": "candidate-6-1-1-2",
    "name": "Prakash Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_adhikari.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Road construction",
      "Job creation"
    ],
    "education": "MBA",
    "assetsWorth": 8035955,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986464431",
      "email": "prakash_adhikari@example.com",
      "address": "Dailekh, Karnali"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-6-1-1"
  },
  {
    "id": "candidate-6-1-2-1",
    "name": "Bikram Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Anti-corruption measures",
      "Clean water access",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 1085853,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981491631",
      "email": "bikram_bhatt@example.com",
      "address": "Dailekh, Karnali"
    },
    "publicScoreRating": 6.1,
    "constituencyId": "constituency-6-1-2"
  },
  {
    "id": "candidate-6-1-2-2",
    "name": "Suman Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_gurung.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Electricity expansion"
    ],
    "education": "High School",
    "assetsWorth": 26040247,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982424985",
      "email": "suman_gurung@example.com",
      "address": "Dailekh, Karnali"
    },
    "publicScoreRating": 4.7,
    "constituencyId": "constituency-6-1-2"
  },
  {
    "id": "candidate-6-2-1-1",
    "name": "Suraj Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_adhikari.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Youth development",
      "Healthcare improvement",
      "Agricultural support"
    ],
    "education": "PhD",
    "assetsWorth": 26471929,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984962298",
      "email": "suraj_adhikari@example.com",
      "address": "Dolpa, Karnali"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-6-2-1"
  },
  {
    "id": "candidate-6-2-1-2",
    "name": "Narayan Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_gurung.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Youth development",
      "Flood control",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 25000779,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985760375",
      "email": "narayan_gurung@example.com",
      "address": "Dolpa, Karnali"
    },
    "publicScoreRating": 6.7,
    "constituencyId": "constituency-6-2-1"
  },
  {
    "id": "candidate-6-3-1-1",
    "name": "Kunti Adhikari",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_adhikari.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Electricity expansion",
      "Forest conservation",
      "Job creation"
    ],
    "education": "High School",
    "assetsWorth": 28332283,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988464045",
      "email": "kunti_adhikari@example.com",
      "address": "Humla, Karnali"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-6-3-1"
  },
  {
    "id": "candidate-6-3-1-2",
    "name": "Kamal Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_gurung.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Women empowerment",
      "Forest conservation"
    ],
    "education": "MBA",
    "assetsWorth": 24893571,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983240140",
      "email": "kamal_gurung@example.com",
      "address": "Humla, Karnali"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-6-3-1"
  },
  {
    "id": "candidate-6-4-1-1",
    "name": "Sujata Chhetri",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_chhetri.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Job creation",
      "Education reform",
      "Electricity expansion"
    ],
    "education": "Bachelors",
    "assetsWorth": 15028058,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987721541",
      "email": "sujata_chhetri@example.com",
      "address": "Jajarkot, Karnali"
    },
    "publicScoreRating": 9.5,
    "constituencyId": "constituency-6-4-1"
  },
  {
    "id": "candidate-6-4-1-2",
    "name": "Gita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_rai.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Job creation",
      "Forest conservation",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 9804445,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981663069",
      "email": "gita_rai@example.com",
      "address": "Jajarkot, Karnali"
    },
    "publicScoreRating": 8.4,
    "constituencyId": "constituency-6-4-1"
  },
  {
    "id": "candidate-6-5-1-1",
    "name": "Ram Shrestha",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_shrestha.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Local industry support",
      "Agricultural support"
    ],
    "education": "Bachelors",
    "assetsWorth": 18382502,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989692995",
      "email": "ram_shrestha@example.com",
      "address": "Jumla, Karnali"
    },
    "publicScoreRating": 4.1,
    "constituencyId": "constituency-6-5-1"
  },
  {
    "id": "candidate-6-5-1-2",
    "name": "Suman Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_gurung.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Education reform",
      "Flood control",
      "Local industry support"
    ],
    "education": "MBA",
    "assetsWorth": 9086392,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981362701",
      "email": "suman_gurung@example.com",
      "address": "Jumla, Karnali"
    },
    "publicScoreRating": 8.9,
    "constituencyId": "constituency-6-5-1"
  },
  {
    "id": "candidate-6-6-1-1",
    "name": "Asha Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_shrestha.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Forest conservation",
      "Women empowerment"
    ],
    "education": "Masters",
    "assetsWorth": 16644459,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989290297",
      "email": "asha_shrestha@example.com",
      "address": "Kalikot, Karnali"
    },
    "publicScoreRating": 4.1,
    "constituencyId": "constituency-6-6-1"
  },
  {
    "id": "candidate-6-6-1-2",
    "name": "Bishal Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Tourism promotion",
      "Women empowerment",
      "Job creation"
    ],
    "education": "PhD",
    "assetsWorth": 5450858,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985183378",
      "email": "bishal_bhatt@example.com",
      "address": "Kalikot, Karnali"
    },
    "publicScoreRating": 5.5,
    "constituencyId": "constituency-6-6-1"
  },
  {
    "id": "candidate-6-7-1-1",
    "name": "Ram Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Local industry support",
      "Agricultural support",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 1683492,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984335804",
      "email": "ram_pandey@example.com",
      "address": "Mugu, Karnali"
    },
    "publicScoreRating": 5.9,
    "constituencyId": "constituency-6-7-1"
  },
  {
    "id": "candidate-6-7-1-2",
    "name": "Narayan Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_pandey.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Forest conservation",
      "Healthcare improvement",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 10535142,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983760863",
      "email": "narayan_pandey@example.com",
      "address": "Mugu, Karnali"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-6-7-1"
  },
  {
    "id": "candidate-6-8-1-1",
    "name": "Maya Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/maya_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Anti-corruption measures",
      "Electricity expansion",
      "Digital connectivity"
    ],
    "education": "Bachelors",
    "assetsWorth": 7564789,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988077347",
      "email": "maya_bhatt@example.com",
      "address": "Salyan, Karnali"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-6-8-1"
  },
  {
    "id": "candidate-6-8-1-2",
    "name": "Sujata Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_shrestha.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Healthcare improvement",
      "Local industry support",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 16775745,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-981661716",
      "email": "sujata_shrestha@example.com",
      "address": "Salyan, Karnali"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-6-8-1"
  },
  {
    "id": "candidate-6-9-1-1",
    "name": "Gita Yadav",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Road construction",
      "Education reform",
      "Forest conservation"
    ],
    "education": "High School",
    "assetsWorth": 1613002,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989250898",
      "email": "gita_yadav@example.com",
      "address": "Surkhet, Karnali"
    },
    "publicScoreRating": 5.0,
    "constituencyId": "constituency-6-9-1"
  },
  {
    "id": "candidate-6-9-1-2",
    "name": "Asha Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Electricity expansion",
      "Forest conservation",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 26375571,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985207488",
      "email": "asha_thapa@example.com",
      "address": "Surkhet, Karnali"
    },
    "publicScoreRating": 5.6,
    "constituencyId": "constituency-6-9-1"
  },
  {
    "id": "candidate-6-9-2-1",
    "name": "Gita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Road construction",
      "Anti-corruption measures",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 24752400,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980466414",
      "email": "gita_thapa@example.com",
      "address": "Surkhet, Karnali"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-6-9-2"
  },
  {
    "id": "candidate-6-9-2-2",
    "name": "Suman Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/suman_adhikari.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Electricity expansion",
      "Clean water access",
      "Anti-corruption measures"
    ],
    "education": "PhD",
    "assetsWorth": 8533093,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983847106",
      "email": "suman_adhikari@example.com",
      "address": "Surkhet, Karnali"
    },
    "publicScoreRating": 6.6,
    "constituencyId": "constituency-6-9-2"
  },
  {
    "id": "candidate-6-10-1-1",
    "name": "Prakash Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_maharjan.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Healthcare improvement",
      "Digital connectivity",
      "Infrastructure development"
    ],
    "education": "Bachelors",
    "assetsWorth": 15609604,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980676775",
      "email": "prakash_maharjan@example.com",
      "address": "Western Rukum, Karnali"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-6-10-1"
  },
  {
    "id": "candidate-6-10-1-2",
    "name": "Bikram Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_gurung.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Education reform",
      "Infrastructure development",
      "Flood control"
    ],
    "education": "Masters",
    "assetsWorth": 13662392,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983308283",
      "email": "bikram_gurung@example.com",
      "address": "Western Rukum, Karnali"
    },
    "publicScoreRating": 6.0,
    "constituencyId": "constituency-6-10-1"
  },
  {
    "id": "candidate-7-1-1-1",
    "name": "Hari Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/hari_bhatt.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Flood control",
      "Electricity expansion",
      "Digital connectivity"
    ],
    "education": "Masters",
    "assetsWorth": 21640664,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982782193",
      "email": "hari_bhatt@example.com",
      "address": "Achham, Sudurpashchim"
    },
    "publicScoreRating": 9.3,
    "constituencyId": "constituency-7-1-1"
  },
  {
    "id": "candidate-7-1-1-2",
    "name": "Raj Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/raj_yadav.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Clean water access",
      "Local industry support",
      "Forest conservation"
    ],
    "education": "Bachelors",
    "assetsWorth": 23150262,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980162505",
      "email": "raj_yadav@example.com",
      "address": "Achham, Sudurpashchim"
    },
    "publicScoreRating": 4.4,
    "constituencyId": "constituency-7-1-1"
  },
  {
    "id": "candidate-7-1-2-1",
    "name": "Sunita Bhatt",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Infrastructure development",
      "Agricultural support",
      "Healthcare improvement"
    ],
    "education": "Masters",
    "assetsWorth": 18412048,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982766039",
      "email": "sunita_bhatt@example.com",
      "address": "Achham, Sudurpashchim"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-7-1-2"
  },
  {
    "id": "candidate-7-1-2-2",
    "name": "Asha Subedi",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_subedi.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Youth development",
      "Job creation",
      "Local industry support"
    ],
    "education": "High School",
    "assetsWorth": 6717496,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983618874",
      "email": "asha_subedi@example.com",
      "address": "Achham, Sudurpashchim"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-7-1-2"
  },
  {
    "id": "candidate-7-2-1-1",
    "name": "Bishal Yadav",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_yadav.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Digital connectivity",
      "Local industry support",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 12950092,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985159186",
      "email": "bishal_yadav@example.com",
      "address": "Baitadi, Sudurpashchim"
    },
    "publicScoreRating": 6.8,
    "constituencyId": "constituency-7-2-1"
  },
  {
    "id": "candidate-7-2-1-2",
    "name": "Sujata Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/sujata_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Youth development",
      "Road construction",
      "Job creation"
    ],
    "education": "High School",
    "assetsWorth": 29719878,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988638571",
      "email": "sujata_pandey@example.com",
      "address": "Baitadi, Sudurpashchim"
    },
    "publicScoreRating": 8.2,
    "constituencyId": "constituency-7-2-1"
  },
  {
    "id": "candidate-7-3-1-1",
    "name": "Bikram Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_adhikari.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Flood control",
      "Anti-corruption measures",
      "Agricultural support"
    ],
    "education": "High School",
    "assetsWorth": 10715201,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988036023",
      "email": "bikram_adhikari@example.com",
      "address": "Bajhang, Sudurpashchim"
    },
    "publicScoreRating": 7.1,
    "constituencyId": "constituency-7-3-1"
  },
  {
    "id": "candidate-7-3-1-2",
    "name": "Prakash Maharjan",
    "gender": "Male",
    "photoURL": "/images/candidates/prakash_maharjan.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Infrastructure development",
      "Agricultural support",
      "Healthcare improvement"
    ],
    "education": "MBA",
    "assetsWorth": 18906001,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983712114",
      "email": "prakash_maharjan@example.com",
      "address": "Bajhang, Sudurpashchim"
    },
    "publicScoreRating": 8.1,
    "constituencyId": "constituency-7-3-1"
  },
  {
    "id": "candidate-7-4-1-1",
    "name": "Kamal Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_pandey.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Youth development",
      "Education reform",
      "Road construction"
    ],
    "education": "High School",
    "assetsWorth": 19877156,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984698146",
      "email": "kamal_pandey@example.com",
      "address": "Bajura, Sudurpashchim"
    },
    "publicScoreRating": 9.4,
    "constituencyId": "constituency-7-4-1"
  },
  {
    "id": "candidate-7-4-1-2",
    "name": "Sunita Shrestha",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_shrestha.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Flood control",
      "Road construction",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 27227023,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983011154",
      "email": "sunita_shrestha@example.com",
      "address": "Bajura, Sudurpashchim"
    },
    "publicScoreRating": 7.2,
    "constituencyId": "constituency-7-4-1"
  },
  {
    "id": "candidate-7-5-1-1",
    "name": "Kamal Subedi",
    "gender": "Male",
    "photoURL": "/images/candidates/kamal_subedi.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Anti-corruption measures",
      "Digital connectivity",
      "Education reform"
    ],
    "education": "Bachelors",
    "assetsWorth": 2620946,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980071562",
      "email": "kamal_subedi@example.com",
      "address": "Dadeldhura, Sudurpashchim"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-7-5-1"
  },
  {
    "id": "candidate-7-5-1-2",
    "name": "Asha Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/asha_karki.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Women empowerment",
      "Youth development",
      "Tourism promotion"
    ],
    "education": "Masters",
    "assetsWorth": 7428853,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983578690",
      "email": "asha_karki@example.com",
      "address": "Dadeldhura, Sudurpashchim"
    },
    "publicScoreRating": 8.7,
    "constituencyId": "constituency-7-5-1"
  },
  {
    "id": "candidate-7-6-1-1",
    "name": "Krishna Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_thapa.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Youth development",
      "Road construction",
      "Job creation"
    ],
    "education": "High School",
    "assetsWorth": 18051141,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982951383",
      "email": "krishna_thapa@example.com",
      "address": "Darchula, Sudurpashchim"
    },
    "publicScoreRating": 5.2,
    "constituencyId": "constituency-7-6-1"
  },
  {
    "id": "candidate-7-6-1-2",
    "name": "Sunita Thapa",
    "gender": "Female",
    "photoURL": "/images/candidates/sunita_thapa.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Job creation",
      "Education reform",
      "Women empowerment"
    ],
    "education": "MBA",
    "assetsWorth": 18847664,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984309057",
      "email": "sunita_thapa@example.com",
      "address": "Darchula, Sudurpashchim"
    },
    "publicScoreRating": 4.2,
    "constituencyId": "constituency-7-6-1"
  },
  {
    "id": "candidate-7-7-1-1",
    "name": "Krishna Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pandey.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Women empowerment",
      "Digital connectivity",
      "Tourism promotion"
    ],
    "education": "Bachelors",
    "assetsWorth": 3751826,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-988853436",
      "email": "krishna_pandey@example.com",
      "address": "Doti, Sudurpashchim"
    },
    "publicScoreRating": 7.1,
    "constituencyId": "constituency-7-7-1"
  },
  {
    "id": "candidate-7-7-1-2",
    "name": "Kunti Gurung",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_gurung.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Anti-corruption measures"
    ],
    "education": "Bachelors",
    "assetsWorth": 14423164,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986364840",
      "email": "kunti_gurung@example.com",
      "address": "Doti, Sudurpashchim"
    },
    "publicScoreRating": 4.6,
    "constituencyId": "constituency-7-7-1"
  },
  {
    "id": "candidate-7-8-1-1",
    "name": "Manjita Pandey",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_pandey.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Road construction",
      "Agricultural support",
      "Digital connectivity"
    ],
    "education": "High School",
    "assetsWorth": 25765734,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984954964",
      "email": "manjita_pandey@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 4.0,
    "constituencyId": "constituency-7-8-1"
  },
  {
    "id": "candidate-7-8-1-2",
    "name": "Narayan Chhetri",
    "gender": "Male",
    "photoURL": "/images/candidates/narayan_chhetri.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Local industry support",
      "Infrastructure development",
      "Youth development"
    ],
    "education": "PhD",
    "assetsWorth": 10535924,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985401519",
      "email": "narayan_chhetri@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 5.1,
    "constituencyId": "constituency-7-8-1"
  },
  {
    "id": "candidate-7-8-2-1",
    "name": "Manjita Maharjan",
    "gender": "Female",
    "photoURL": "/images/candidates/manjita_maharjan.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Tourism promotion",
      "Job creation",
      "Clean water access"
    ],
    "education": "Masters",
    "assetsWorth": 29658031,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986914922",
      "email": "manjita_maharjan@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-7-8-2"
  },
  {
    "id": "candidate-7-8-2-2",
    "name": "Bikram Bhatt",
    "gender": "Male",
    "photoURL": "/images/candidates/bikram_bhatt.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Tourism promotion",
      "Healthcare improvement"
    ],
    "education": "Masters",
    "assetsWorth": 4313737,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984216711",
      "email": "bikram_bhatt@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 7.0,
    "constituencyId": "constituency-7-8-2"
  },
  {
    "id": "candidate-7-8-3-1",
    "name": "Suraj Gurung",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_gurung.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Electricity expansion",
      "Tourism promotion",
      "Agricultural support"
    ],
    "education": "MBA",
    "assetsWorth": 17636186,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986072605",
      "email": "suraj_gurung@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 8.3,
    "constituencyId": "constituency-7-8-3"
  },
  {
    "id": "candidate-7-8-3-2",
    "name": "Krishna Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pandey.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Education reform",
      "Forest conservation",
      "Healthcare improvement"
    ],
    "education": "MBA",
    "assetsWorth": 21110580,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-987227923",
      "email": "krishna_pandey@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 5.3,
    "constituencyId": "constituency-7-8-3"
  },
  {
    "id": "candidate-7-8-4-1",
    "name": "Priya Pokharel",
    "gender": "Female",
    "photoURL": "/images/candidates/priya_pokharel.jpg",
    "partyId": "party-mc",
    "pastElectionHistory": "Business leader",
    "agendas": [
      "Local industry support",
      "Clean water access",
      "Road construction"
    ],
    "education": "Masters",
    "assetsWorth": 11774789,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984231117",
      "email": "priya_pokharel@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 5.6,
    "constituencyId": "constituency-7-8-4"
  },
  {
    "id": "candidate-7-8-4-2",
    "name": "Ramesh Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/ramesh_adhikari.jpg",
    "partyId": "party-rpp",
    "pastElectionHistory": "Longtime party worker",
    "agendas": [
      "Infrastructure development",
      "Road construction",
      "Education reform"
    ],
    "education": "PhD",
    "assetsWorth": 7512100,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985303459",
      "email": "ramesh_adhikari@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 8.9,
    "constituencyId": "constituency-7-8-4"
  },
  {
    "id": "candidate-7-8-5-1",
    "name": "Ram Thapa",
    "gender": "Male",
    "photoURL": "/images/candidates/ram_thapa.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Flood control",
      "Anti-corruption measures",
      "Electricity expansion"
    ],
    "education": "High School",
    "assetsWorth": 10914346,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-984834786",
      "email": "ram_thapa@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 7.3,
    "constituencyId": "constituency-7-8-5"
  },
  {
    "id": "candidate-7-8-5-2",
    "name": "Krishna Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_pandey.jpg",
    "partyId": "party-uml",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Clean water access",
      "Women empowerment",
      "Local industry support"
    ],
    "education": "High School",
    "assetsWorth": 4596283,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-986052397",
      "email": "krishna_pandey@example.com",
      "address": "Kailali, Sudurpashchim"
    },
    "publicScoreRating": 4.8,
    "constituencyId": "constituency-7-8-5"
  },
  {
    "id": "candidate-7-9-1-1",
    "name": "Suraj Pandey",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_pandey.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Former Mayor",
    "agendas": [
      "Tourism promotion",
      "Clean water access",
      "Infrastructure development"
    ],
    "education": "PhD",
    "assetsWorth": 6017809,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-985456987",
      "email": "suraj_pandey@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 5.8,
    "constituencyId": "constituency-7-9-1"
  },
  {
    "id": "candidate-7-9-1-2",
    "name": "Suraj Adhikari",
    "gender": "Male",
    "photoURL": "/images/candidates/suraj_adhikari.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Local activist",
    "agendas": [
      "Electricity expansion",
      "Job creation",
      "Youth development"
    ],
    "education": "Masters",
    "assetsWorth": 8014085,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-989292846",
      "email": "suraj_adhikari@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 7.9,
    "constituencyId": "constituency-7-9-1"
  },
  {
    "id": "candidate-7-9-2-1",
    "name": "Kunti Karki",
    "gender": "Female",
    "photoURL": "/images/candidates/kunti_karki.jpg",
    "partyId": "party-nc",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Women empowerment",
      "Youth development",
      "Tourism promotion"
    ],
    "education": "High School",
    "assetsWorth": 13124513,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-982241974",
      "email": "kunti_karki@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 7.7,
    "constituencyId": "constituency-7-9-2"
  },
  {
    "id": "candidate-7-9-2-2",
    "name": "Gita Rai",
    "gender": "Female",
    "photoURL": "/images/candidates/gita_rai.jpg",
    "partyId": "party-jp",
    "pastElectionHistory": "Social worker",
    "agendas": [
      "Local industry support",
      "Education reform",
      "Flood control"
    ],
    "education": "PhD",
    "assetsWorth": 25258892,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-980283791",
      "email": "gita_rai@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 8.0,
    "constituencyId": "constituency-7-9-2"
  },
  {
    "id": "candidate-7-9-3-1",
    "name": "Bishal Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/bishal_karki.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "First time candidate",
    "agendas": [
      "Digital connectivity",
      "Healthcare improvement",
      "Electricity expansion"
    ],
    "education": "PhD",
    "assetsWorth": 7846623,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983554954",
      "email": "bishal_karki@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 5.9,
    "constituencyId": "constituency-7-9-3"
  },
  {
    "id": "candidate-7-9-3-2",
    "name": "Krishna Karki",
    "gender": "Male",
    "photoURL": "/images/candidates/krishna_karki.jpg",
    "partyId": "party-rsp",
    "pastElectionHistory": "Former Minister",
    "agendas": [
      "Healthcare improvement",
      "Infrastructure development",
      "Clean water access"
    ],
    "education": "MBA",
    "assetsWorth": 26422288,
    "criminalRecords": [],
    "contactInfo": {
      "phone": "+977-983768048",
      "email": "krishna_karki@example.com",
      "address": "Kanchanpur, Sudurpashchim"
    },
    "publicScoreRating": 7.8,
    "constituencyId": "constituency-7-9-3"
  }
];

// Helper functions for candidate data access
export const getAllCandidates = (): Candidate[] => {
  return candidatesData;
};

export const getCandidatesByConstituency = (constituencyId: string): Candidate[] => {
  return candidatesData.filter(candidate => candidate.constituencyId === constituencyId);
};

export const getCandidatesByParty = (partyId: string): Candidate[] => {
  return candidatesData.filter(candidate => candidate.partyId === partyId);
};

export const getCandidatesByGender = (gender: 'Male' | 'Female' | 'Other'): Candidate[] => {
  return candidatesData.filter(candidate => candidate.gender === gender);
};

export const getCandidatesWithCriminalRecords = (): Candidate[] => {
  return candidatesData.filter(candidate => candidate.criminalRecords.length > 0);
};

export const getCandidateById = (candidateId: string): Candidate | undefined => {
  return candidatesData.find(candidate => candidate.id === candidateId);
};
