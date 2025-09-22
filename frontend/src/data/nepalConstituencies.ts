// Nepal Federal Constituencies Data Structure
export interface BoothLocation {
    id: string;
    latitude: number;
    longitude: number;
  }

export interface Constituency {
    id: string;
    name: string;
    number: number;
    type: 'Federal' | 'Provincial';
    boothLocations: BoothLocation[];
  }
  
  export interface District {
    id: string;
    name: string;
    constituencies: Constituency[];
  }
  
  export interface Province {
    id: string;
    name: string;
    districts: District[];
  }
  
  // Complete data for Nepal federal constituencies
  export const nepalData: Province[] = [
    {
      "id": "province-1",
      "name": "Koshi Province",
      "districts": [
        {
          "id": "district-1-1",
          "name": "Taplejung",
          "constituencies": [
            {
              "id": "constituency-1-1-1",
              "name": "Taplejung 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-2",
          "name": "Panchthar",
          "constituencies": [
            {
              "id": "constituency-1-2-1",
              "name": "Panchthar 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-3",
          "name": "Ilam",
          "constituencies": [
            {
              "id": "constituency-1-3-1",
              "name": "Ilam 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-3-2",
              "name": "Ilam 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-4",
          "name": "Jhapa",
          "constituencies": [
            {
              "id": "constituency-1-4-1",
              "name": "Jhapa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-4-2",
              "name": "Jhapa 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-4-3",
              "name": "Jhapa 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-4-4",
              "name": "Jhapa 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-4-5",
              "name": "Jhapa 5",
              "number": 5,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-5",
          "name": "Morang",
          "constituencies": [
            {
              "id": "constituency-1-5-1",
              "name": "Morang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-5-2",
              "name": "Morang 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-5-3",
              "name": "Morang 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-5-4",
              "name": "Morang 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-5-5",
              "name": "Morang 5",
              "number": 5,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-5-6",
              "name": "Morang 6",
              "number": 6,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-6",
          "name": "Sunsari",
          "constituencies": [
            {
              "id": "constituency-1-6-1",
              "name": "Sunsari 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-6-2",
              "name": "Sunsari 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-6-3",
              "name": "Sunsari 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-6-4",
              "name": "Sunsari 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-7",
          "name": "Dhankuta",
          "constituencies": [
            {
              "id": "constituency-1-7-1",
              "name": "Dhankuta 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-8",
          "name": "Terhathum",
          "constituencies": [
            {
              "id": "constituency-1-8-1",
              "name": "Terhathum 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-9",
          "name": "Sankhuwasabha",
          "constituencies": [
            {
              "id": "constituency-1-9-1",
              "name": "Sankhuwasabha 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-10",
          "name": "Bhojpur",
          "constituencies": [
            {
              "id": "constituency-1-10-1",
              "name": "Bhojpur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-11",
          "name": "Khotang",
          "constituencies": [
            {
              "id": "constituency-1-11-1",
              "name": "Khotang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-12",
          "name": "Okhaldhunga",
          "constituencies": [
            {
              "id": "constituency-1-12-1",
              "name": "Okhaldhunga 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-13",
          "name": "Solukhumbu",
          "constituencies": [
            {
              "id": "constituency-1-13-1",
              "name": "Solukhumbu 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-1-14",
          "name": "Udayapur",
          "constituencies": [
            {
              "id": "constituency-1-14-1",
              "name": "Udayapur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-1-14-2",
              "name": "Udayapur 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-2",
      "name": "Madhesh Province",
      "districts": [
        {
          "id": "district-2-1",
          "name": "Saptari",
          "constituencies": [
            {
              "id": "constituency-2-1-1",
              "name": "Saptari 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-1-2",
              "name": "Saptari 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-1-3",
              "name": "Saptari 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-1-4",
              "name": "Saptari 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-2",
          "name": "Siraha",
          "constituencies": [
            {
              "id": "constituency-2-2-1",
              "name": "Siraha 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-2-2",
              "name": "Siraha 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-2-3",
              "name": "Siraha 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-2-4",
              "name": "Siraha 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-3",
          "name": "Dhanusha",
          "constituencies": [
            {
              "id": "constituency-2-3-1",
              "name": "Dhanusha 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-3-2",
              "name": "Dhanusha 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-3-3",
              "name": "Dhanusha 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-3-4",
              "name": "Dhanusha 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-4",
          "name": "Mahottari",
          "constituencies": [
            {
              "id": "constituency-2-4-1",
              "name": "Mahottari 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-4-2",
              "name": "Mahottari 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-4-3",
              "name": "Mahottari 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-4-4",
              "name": "Mahottari 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-5",
          "name": "Sarlahi",
          "constituencies": [
            {
              "id": "constituency-2-5-1",
              "name": "Sarlahi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-5-2",
              "name": "Sarlahi 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-5-3",
              "name": "Sarlahi 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-5-4",
              "name": "Sarlahi 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-6",
          "name": "Rautahat",
          "constituencies": [
            {
              "id": "constituency-2-6-1",
              "name": "Rautahat 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-6-2",
              "name": "Rautahat 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-6-3",
              "name": "Rautahat 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-6-4",
              "name": "Rautahat 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-7",
          "name": "Bara",
          "constituencies": [
            {
              "id": "constituency-2-7-1",
              "name": "Bara 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-7-2",
              "name": "Bara 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-7-3",
              "name": "Bara 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-7-4",
              "name": "Bara 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-2-8",
          "name": "Parsa",
          "constituencies": [
            {
              "id": "constituency-2-8-1",
              "name": "Parsa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-8-2",
              "name": "Parsa 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-8-3",
              "name": "Parsa 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-2-8-4",
              "name": "Parsa 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-3",
      "name": "Bagmati Province",
      "districts": [
        {
          "id": "district-3-1",
          "name": "Sindhuli",
          "constituencies": [
            {
              "id": "constituency-3-1-1",
              "name": "Sindhuli 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-1-2",
              "name": "Sindhuli 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-2",
          "name": "Ramechhap",
          "constituencies": [
            {
              "id": "constituency-3-2-1",
              "name": "Ramechhap 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-3",
          "name": "Dolakha",
          "constituencies": [
            {
              "id": "constituency-3-3-1",
              "name": "Dolakha 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-4",
          "name": "Bhaktapur",
          "constituencies": [
            {
              "id": "constituency-3-4-1",
              "name": "Bhaktapur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-4-2",
              "name": "Bhaktapur 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-5",
          "name": "Dhading",
          "constituencies": [
            {
              "id": "constituency-3-5-1",
              "name": "Dhading 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-5-2",
              "name": "Dhading 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-5-3",
              "name": "Dhading 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-6",
          "name": "Kathmandu",
          "constituencies": [
            {
              "id": "constituency-3-6-1",
              "name": "Kathmandu 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-1-1",
                  "latitude": 27.7044,
                  "longitude": 85.3170
                },
                {
                  "id": "booth-3-6-1-2",
                  "latitude": 27.7050,
                  "longitude": 85.3180
                },
                {
                  "id": "booth-3-6-1-3",
                  "latitude": 27.7060,
                  "longitude": 85.3190
                }
              ]
            },
            {
              "id": "constituency-3-6-2",
              "name": "Kathmandu 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-2-1",
                  "latitude": 27.7100,
                  "longitude": 85.3200
                },
                {
                  "id": "booth-3-6-2-2",
                  "latitude": 27.7110,
                  "longitude": 85.3210
                }
              ]
            },
            {
              "id": "constituency-3-6-3",
              "name": "Kathmandu 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-3-1",
                  "latitude": 27.7150,
                  "longitude": 85.3250
                },
                {
                  "id": "booth-3-6-3-2",
                  "latitude": 27.7160,
                  "longitude": 85.3260
                }
              ]
            },
            {
              "id": "constituency-3-6-4",
              "name": "Kathmandu 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-4-1",
                  "latitude": 27.7200,
                  "longitude": 85.3300
                },
                {
                  "id": "booth-3-6-4-2",
                  "latitude": 27.7210,
                  "longitude": 85.3310
                },
                {
                  "id": "booth-3-6-4-3",
                  "latitude": 27.7220,
                  "longitude": 85.3320
                }
              ]
            },
            {
              "id": "constituency-3-6-5",
              "name": "Kathmandu 5",
              "number": 5,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-5-1",
                  "latitude": 27.7300,
                  "longitude": 85.3400
                },
                {
                  "id": "booth-3-6-5-2",
                  "latitude": 27.7310,
                  "longitude": 85.3410
                },
                {
                  "id": "booth-3-6-5-3",
                  "latitude": 27.7320,
                  "longitude": 85.3420
                }
              ]
            },
            {
              "id": "constituency-3-6-6",
              "name": "Kathmandu 6",
              "number": 6,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-6-1",
                  "latitude": 27.7400,
                  "longitude": 85.3500
                },
                {
                  "id": "booth-3-6-6-2",
                  "latitude": 27.7410,
                  "longitude": 85.3510
                },
                {
                  "id": "booth-3-6-6-3",
                  "latitude": 27.7420,
                  "longitude": 85.3520
                }
              ]
            },
            {
              "id": "constituency-3-6-7",
              "name": "Kathmandu 7",
              "number": 7,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-7-1",
                  "latitude": 27.7500,
                  "longitude": 85.3600
                },
                {
                  "id": "booth-3-6-7-2",
                  "latitude": 27.7510,
                  "longitude": 85.3610
                },
                {
                  "id": "booth-3-6-7-3",
                  "latitude": 27.7520,
                  "longitude": 85.3620
                }
              ]
            },
            {
              "id": "constituency-3-6-8",
              "name": "Kathmandu 8",
              "number": 8,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-8-1",
                  "latitude": 27.7600,
                  "longitude": 85.3700
                },
                {
                  "id": "booth-3-6-8-2",
                  "latitude": 27.7610,
                  "longitude": 85.3710
                },
                {
                  "id": "booth-3-6-8-3",
                  "latitude": 27.7620,
                  "longitude": 85.3720
                }
              ]
            },
            {
              "id": "constituency-3-6-9",
              "name": "Kathmandu 9",
              "number": 9,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-9-1",
                  "latitude": 27.7700,
                  "longitude": 85.3800
                },
                {
                  "id": "booth-3-6-9-2",
                  "latitude": 27.7710,
                  "longitude": 85.3810
                },
                {
                  "id": "booth-3-6-9-3",
                  "latitude": 27.7720,
                  "longitude": 85.3820
                }
              ]
            },
            {
              "id": "constituency-3-6-10",
              "name": "Kathmandu 10",
              "number": 10,
              "type": "Federal",
              "boothLocations": [
                {
                  "id": "booth-3-6-10-1",
                  "latitude": 27.7800,
                  "longitude": 85.3900
                },
                {
                  "id": "booth-3-6-10-2",
                  "latitude": 27.7810,
                  "longitude": 85.3910
                },
                {
                  "id": "booth-3-6-10-3",
                  "latitude": 27.7820,
                  "longitude": 85.3920
                }
              ]
            }
          ]
        },
        {
          "id": "district-3-7",
          "name": "Kavrepalanchok",
          "constituencies": [
            {
              "id": "constituency-3-7-1",
              "name": "Kavrepalanchok 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-7-2",
              "name": "Kavrepalanchok 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-8",
          "name": "Lalitpur",
          "constituencies": [
            {
              "id": "constituency-3-8-1",
              "name": "Lalitpur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-8-2",
              "name": "Lalitpur 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-8-3",
              "name": "Lalitpur 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-9",
          "name": "Nuwakot",
          "constituencies": [
            {
              "id": "constituency-3-9-1",
              "name": "Nuwakot 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-9-2",
              "name": "Nuwakot 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-10",
          "name": "Rasuwa",
          "constituencies": [
            {
              "id": "constituency-3-10-1",
              "name": "Rasuwa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-11",
          "name": "Sindhupalchok",
          "constituencies": [
            {
              "id": "constituency-3-11-1",
              "name": "Sindhupalchok 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-11-2",
              "name": "Sindhupalchok 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-3-12",
          "name": "Chitwan",
          "constituencies": [
            {
              "id": "constituency-3-12-1",
              "name": "Chitwan 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-12-2",
              "name": "Chitwan 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-3-12-3",
              "name": "Chitwan 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-4",
      "name": "Gandaki Province",
      "districts": [
        {
          "id": "district-4-1",
          "name": "Gorkha",
          "constituencies": [
            {
              "id": "constituency-4-1-1",
              "name": "Gorkha 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-1-2",
              "name": "Gorkha 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-2",
          "name": "Kaski",
          "constituencies": [
            {
              "id": "constituency-4-2-1",
              "name": "Kaski 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-2-2",
              "name": "Kaski 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-2-3",
              "name": "Kaski 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-3",
          "name": "Lamjung",
          "constituencies": [
            {
              "id": "constituency-4-3-1",
              "name": "Lamjung 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-4",
          "name": "Manang",
          "constituencies": [
            {
              "id": "constituency-4-4-1",
              "name": "Manang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-5",
          "name": "Mustang",
          "constituencies": [
            {
              "id": "constituency-4-5-1",
              "name": "Mustang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-6",
          "name": "Myagdi",
          "constituencies": [
            {
              "id": "constituency-4-6-1",
              "name": "Myagdi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-7",
          "name": "Nawalpur",
          "constituencies": [
            {
              "id": "constituency-4-7-1",
              "name": "Nawalpur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-7-2",
              "name": "Nawalpur 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-8",
          "name": "Parbat",
          "constituencies": [
            {
              "id": "constituency-4-8-1",
              "name": "Parbat 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-9",
          "name": "Syangja",
          "constituencies": [
            {
              "id": "constituency-4-9-1",
              "name": "Syangja 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-9-2",
              "name": "Syangja 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-4-10",
          "name": "Tanahun",
          "constituencies": [
            {
              "id": "constituency-4-10-1",
              "name": "Tanahun 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-4-10-2",
              "name": "Tanahun 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-5",
      "name": "Lumbini Province",
      "districts": [
        {
          "id": "district-5-1",
          "name": "Kapilvastu",
          "constituencies": [
            {
              "id": "constituency-5-1-1",
              "name": "Kapilvastu 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-1-2",
              "name": "Kapilvastu 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-1-3",
              "name": "Kapilvastu 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-2",
          "name": "Nawalparasi",
          "constituencies": [
            {
              "id": "constituency-5-2-1",
              "name": "Nawalparasi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-2-2",
              "name": "Nawalparasi 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-3",
          "name": "Rupandehi",
          "constituencies": [
            {
              "id": "constituency-5-3-1",
              "name": "Rupandehi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-3-2",
              "name": "Rupandehi 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-3-3",
              "name": "Rupandehi 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-3-4",
              "name": "Rupandehi 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-3-5",
              "name": "Rupandehi 5",
              "number": 5,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-4",
          "name": "Arghakhanchi",
          "constituencies": [
            {
              "id": "constituency-5-4-1",
              "name": "Arghakhanchi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-5",
          "name": "Gulmi",
          "constituencies": [
            {
              "id": "constituency-5-5-1",
              "name": "Gulmi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-5-2",
              "name": "Gulmi 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-6",
          "name": "Palpa",
          "constituencies": [
            {
              "id": "constituency-5-6-1",
              "name": "Palpa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-7",
          "name": "Dang",
          "constituencies": [
            {
              "id": "constituency-5-7-1",
              "name": "Dang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-7-2",
              "name": "Dang 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-7-3",
              "name": "Dang 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-8",
          "name": "Pyuthan",
          "constituencies": [
            {
              "id": "constituency-5-8-1",
              "name": "Pyuthan 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-9",
          "name": "Rolpa",
          "constituencies": [
            {
              "id": "constituency-5-9-1",
              "name": "Rolpa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-10",
          "name": "Eastern Rukum",
          "constituencies": [
            {
              "id": "constituency-5-10-1",
              "name": "Eastern Rukum 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-11",
          "name": "Banke",
          "constituencies": [
            {
              "id": "constituency-5-11-1",
              "name": "Banke 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-11-2",
              "name": "Banke 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-11-3",
              "name": "Banke 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-5-12",
          "name": "Bardiya",
          "constituencies": [
            {
              "id": "constituency-5-12-1",
              "name": "Bardiya 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-5-12-2",
              "name": "Bardiya 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-6",
      "name": "Karnali Province",
      "districts": [
        {
          "id": "district-6-1",
          "name": "Western Rukum",
          "constituencies": [
            {
              "id": "constituency-6-1-1",
              "name": "Western Rukum 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-2",
          "name": "Salyan",
          "constituencies": [
            {
              "id": "constituency-6-2-1",
              "name": "Salyan 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-3",
          "name": "Dolpa",
          "constituencies": [
            {
              "id": "constituency-6-3-1",
              "name": "Dolpa 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-4",
          "name": "Humla",
          "constituencies": [
            {
              "id": "constituency-6-4-1",
              "name": "Humla 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-5",
          "name": "Jajarkot",
          "constituencies": [
            {
              "id": "constituency-6-5-1",
              "name": "Jajarkot 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-6",
          "name": "Jumla",
          "constituencies": [
            {
              "id": "constituency-6-6-1",
              "name": "Jumla 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-7",
          "name": "Kalikot",
          "constituencies": [
            {
              "id": "constituency-6-7-1",
              "name": "Kalikot 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-8",
          "name": "Mugu",
          "constituencies": [
            {
              "id": "constituency-6-8-1",
              "name": "Mugu 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-9",
          "name": "Surkhet",
          "constituencies": [
            {
              "id": "constituency-6-9-1",
              "name": "Surkhet 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-6-9-2",
              "name": "Surkhet 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-6-10",
          "name": "Dailekh",
          "constituencies": [
            {
              "id": "constituency-6-10-1",
              "name": "Dailekh 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-6-10-2",
              "name": "Dailekh 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    },
    {
      "id": "province-7",
      "name": "Sudurpashchim Province",
      "districts": [
        {
          "id": "district-7-1",
          "name": "Kailali",
          "constituencies": [
            {
              "id": "constituency-7-1-1",
              "name": "Kailali 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-1-2",
              "name": "Kailali 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-1-3",
              "name": "Kailali 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-1-4",
              "name": "Kailali 4",
              "number": 4,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-1-5",
              "name": "Kailali 5",
              "number": 5,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-2",
          "name": "Achham",
          "constituencies": [
            {
              "id": "constituency-7-2-1",
              "name": "Achham 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-2-2",
              "name": "Achham 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-3",
          "name": "Bajhang",
          "constituencies": [
            {
              "id": "constituency-7-3-1",
              "name": "Bajhang 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-4",
          "name": "Bajura",
          "constituencies": [
            {
              "id": "constituency-7-4-1",
              "name": "Bajura 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-5",
          "name": "Doti",
          "constituencies": [
            {
              "id": "constituency-7-5-1",
              "name": "Doti 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-6",
          "name": "Kanchanpur",
          "constituencies": [
            {
              "id": "constituency-7-6-1",
              "name": "Kanchanpur 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-6-2",
              "name": "Kanchanpur 2",
              "number": 2,
              "type": "Federal",
              "boothLocations": []
            },
            {
              "id": "constituency-7-6-3",
              "name": "Kanchanpur 3",
              "number": 3,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-7",
          "name": "Dadeldhura",
          "constituencies": [
            {
              "id": "constituency-7-7-1",
              "name": "Dadeldhura 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-8",
          "name": "Baitadi",
          "constituencies": [
            {
              "id": "constituency-7-8-1",
              "name": "Baitadi 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        },
        {
          "id": "district-7-9",
          "name": "Darchula",
          "constituencies": [
            {
              "id": "constituency-7-9-1",
              "name": "Darchula 1",
              "number": 1,
              "type": "Federal",
              "boothLocations": []
            }
          ]
        }
      ]
    }
  ];
  
  // Helper functions for data access
  export const getProvinces = (): Province[] => {
    return nepalData;
  };
  
  export const getDistrictsByProvince = (provinceId: string): District[] => {
    const province = nepalData.find(p => p.id === provinceId);
    return province ? province.districts : [];
  };
  
  export const getConstituenciesByDistrict = (provinceId: string, districtId: string): Constituency[] => {
    const province = nepalData.find(p => p.id === provinceId);
    if (!province) return [];
    
    const district = province.districts.find(d => d.id === districtId);
    return district ? district.constituencies : [];
  };
  
  export const getBoothLocationsByConstituency = (constituencyId: string): BoothLocation[] => {
    for (const province of nepalData) {
      for (const district of province.districts) {
        const constituency = district.constituencies.find(c => c.id === constituencyId);
        if (constituency) {
          return constituency.boothLocations;
        }
      }
    }
    return [];
  };
  

