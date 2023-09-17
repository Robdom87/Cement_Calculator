export const schema = {
    "services": [
      {
        "serviceName": "Service Name",
        "description": "What the service does",
        "serviceTypes": [
          {
            "typeName": "psi2k",
            "serviceInputs": ["none", "cubicYards", "serviceMaterials", "serviceCostLabor", "total"]
          },
          {
            "typeName": "psi3k",
            "serviceInputs": ["none", "cubicYards", "serviceMaterials", "serviceCostLabor", "total"]
          },
          // Add more service types as needed
        ],
        "extraCosts": [
          {
            "costName": "Extra Cost Name 1",
            "costInputs": ["none", "cubicYards", "serviceMaterials", "serviceCostLabor", "total"]
          },
          {
            "costName": "Extra Cost Name 2",
            "costInputs": ["none", "cubicYards", "serviceMaterials", "serviceCostLabor", "total"]
          },
          {
            "costName": "Extra Cost Name 3",
            "costInputs": ["none", "cubicYards", "serviceMaterials", "serviceCostLabor", "total"]
          }
          // Add more extra costs as needed
        ]
      },
      // Add more services as needed
    ]
  };
  