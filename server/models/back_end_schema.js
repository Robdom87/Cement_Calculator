export const schema = {
  "services": 
    //does entire new sevice need to be in its own object ot be a list of services 
    [
      {
        "serviceName": "ReadyMixConcrete",
        "description": "Ready-Mix Concrete Ready-mix delivered by truck. Typical prices for most cities. Includes delivery up to 20 miles for 10 CY or more, 3" to 4" slump. Material cost only, no placing or pumping included. All concrete material costs in this manual are based on these figures.",
        "serviceTypes": 
        [
          {
            "typeName": "psi2000",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":136, 
             "labor": "none",
             "total": 136,
          
          },
          {
            "typeName": "psi3000",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":141, 
             "labor": "serviceCostLabor",
             "total": 141,
            
          },
          {
            "typeName": "psi3500",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":144, 
             "labor": "serviceCostLabor",
             "total": 144,
            
          },
          {
            "typeName": "psi4000",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":147, 
             "labor": "serviceCostLabor",
             "total": 147,
            
          },
          {
            "typeName": "psi5000",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":168, 
             "labor": "serviceCostLabor",
             "total": 169,
            
          },
          // Add more service types as needed
        ],
        "extraCosts": 
        [
          {
            "costName": "lessThan10CY",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":59.3, 
             "labor": "serviceCostLabor",
             "total": 59.3,
            
          },
          {
            "costName": "deliveryOver20Miles",
            "craftHrs":"none",
             "units": "mile", 
             "materials":10.8, 
             "labor": "serviceCostLabor",
             "total": 10.8,
            
          },
          {
            "costName": "stanbyTimefiveMinutes",
            "craftHrs":"none",
             "units": "EA", 
             "materials":3.39, 
             "labor": "serviceCostLabor",
             "total": 3.39,
            
          },
          {
            "costName": "superPlasticizerMix",
            "craftHrs":"percentage",
             "units": "cubicYards", 
             "materials":8.5, 
             "labor": "serviceCostLabor",
             "total": 8.5,
            
          },
          {
            "costName": "lightweightAggregate",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":62.3, 
             "labor": "serviceCostLabor",
             "total": 62.3,
            
          },
          {
            "costName": "pumpMixPeaGravel",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":13.5, 
             "labor": "serviceCostLabor",
             "total": 13.5,
            
          },
          {
            "costName": "graiteAggregate",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":9.78, 
             "labor": "serviceCostLabor",
             "total": 9.78,
            
          },
          {
            "costName": "whiteCement",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":80.7, 
             "labor": "serviceCostLabor",
             "total": 80.7,
            
          },
          {
            "costName": "calciumChloride",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":2.27, 
             "labor": "serviceCostLabor",
             "total": 2.27,
            
          },
          {
            "costName": "chemicalCompensationShrinkage",
            "craftHrs":"none",
             "units": "cubicYards", 
             "materials":[
              {
                "5sackMic": 17.6,
                "6sackMic": 23.4,
             }
             ], 
             "labor": "serviceCostLabor",
             "total": 29.7,
            
          },
          // Add more extra costs as needed
        ]
      },
      // Add more services as needed

    ],
    {
    "servicesNames": "concretePumpingSubcontract",
    "description": "CSmall jobs, including trailer mounted pump and operator at 15 CY per hour. Based on 6 sack concrete mix designed for pumping. No concrete included. $125.00 minimum charge. ",
    "serviceTypes": 
    {
       //"threeEightsAggregate": 
       [
        "typeName": 
        {
          "typetypeName": "costPerCY",
          "craftHrs":"none",
          "units": "cubicYards", 
          "materials":16.6, 
          "labor": "none",
          "total": 16.6, 
        },
        {
          "typeName": "addForHoseOver200",
          "craftHrs":"none",
          "units": "LF", 
          "materials":2.37, 
          "labor": "none",
          "total": 2.37, 
        },
      ],
      "threeFourthsAggregate": [
        {
          "typeName": "costPerCY",
          "craftHrs":"none",
          "units": "cubicYards", 
          "materials":17.2, 
          "labor": "none",
          "total": 17.2, 
        },
        {
          "typeName": "addForHoseOver200",
          "craftHrs":"none",
          "units": "LF", 
          "materials":2.08, 
          "labor": "none",
          "total": 2.08, 
        }
      ]
    },
    {
    "serviceName": "concretePumpingBoomTruck",
    "description": " Includes truck rent, operator, local travel but no concrete. Add costs equal to 1 hour for equipment setup and 1 hour for cleanup. Use 4 hours as the minimum cost for 23-, 28- and 32-meter boom trucks and 5 hours as the minimum cost for 36- through 52-meter boom trucks. Estimate the actual pour rate at 70% of the rated capacity on thicker slabs and 50% of the capacity on most other work. Costs include operator and oiler where necessary. Costs shown include subcontractor’s markup. ",
    "serviceTypes": [

    {
      "typeName": "23meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 2.39,
        }
      ],
      "total": 149, 
    },
    {
      "typeName": "28meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 3.41,
        }
      ],
      "total": 171, 
    },
    {
      "typeName": "32meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 3.46,
        }
      ],
      "total": 201, 
    },
    {
      "typeName": "36meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 3.46,
        }
      ],
      "total": 246, 
    },
    {
      "typeName": "42meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 4.12,
        }
      ],
      "total": 324, 
    },
    {
      "typeName": "52meterBoom",
      "craftHrs":"none",
      "units": "Hour", 
      "materials":"none", 
      "labor": "none",
      "rate": [
        {
          "type": "perCYPumped23metereBoom",
          "unit": "cubicYards",
          "rate": 4.65,
        }
      ],
      "total": 380, 
    },


  ]
},  
},

  };
  