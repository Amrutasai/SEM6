// import data2 from './TestSidepanel'

let parking_prediction=[55.294245443708895,66.597061717,62.765296030,58.689026837]
let customer_prediction=[67.44813835866948,56.83618926262203,58.96146536087123,55.1780746580977]
let baggage_prediction=[95.9089476393428,93.07362112716878,91.10858237382818,89.74670137509636]
const data_app1=[
  {"Mumbai":
      {
        "name":"Mumbai",
        "about":{
          portname:'Chhatrapati Shivaji Maharaj International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates at T2 Terminal',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://i1.wp.com/www.airwhizz.com/wp-content/uploads/2018/05/1200px-Mumbai_03-2016_114_Airport_international_terminal_interior.jpeg?resize=820%2C400&ssl=1',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
        "parking":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'40', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'15', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'67' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'22', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
                {
                  label: 'N',
                  data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20]]
                },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 50], ['Tue',20], ['Wed', 40], ['Thu', 20], ['Fri', 80],['Sat',60],['Sun',30]]
                },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 20], ['Tue',30], ['Wed', 25], ['Thu', 30], ['Fri', 80],['Sat',50],['Sun',50]]
                },
                {
                  label: 'Prediction',
                  data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20], ['Thu', parking_prediction[0]], ['Fri', parking_prediction[1]],['Sat',parking_prediction[2]],['Sun',parking_prediction[3]]]
                },   
              ],

           'tableval' : 
        [
          {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '50 '},
          {'id': '2', 'floor': 'P1', 'service': 'Valet Parking  ', 'paid': '1000'},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ] 
          
        },
        "customer":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'36', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'69', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
                {'pathcolor':'#ABD99E','percentage':'20' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
                {
                  label: 'N',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 80]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 60], ['Tue',20], ['Wed', 50], ['Thu', 20], ['Fri', 30],['Sat',60],['Sun',30]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',30], ['Wed', 55], ['Thu', 30], ['Fri', 50],['Sat',50],['Sun',90]]
                    },  
                {
                  label: 'Prediction',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 80], ['Thu', customer_prediction[0]], ['Fri', customer_prediction[1]],['Sat',customer_prediction[2]],['Sun',customer_prediction[3]]]
                    }, 
              ],
              
              'tableval' : [
                {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '60 '},
                {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': 'Free'},
                {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '50'},
                {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '750'},
                {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '  '}
              ] 
          
        },
        "baggage":
        {
          'circledata':
              [
                {'pathcolor':'#EC5C5C', 'percentage':'95', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
                {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
                {'pathcolor':'#ABD99E','percentage':'80' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
                {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
              ],
          'chartdata':
              [
                {
                  label: 'N',
                  data: [['',0],['Mon', 60], ['Tue',80], ['Wed', 70]]
                    },
                {
                  label: 'N-1',
                  data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 65], ['Thu', 75], ['Fri', 87],['Sat',76],['Sun',90]]
                    },
                {
                  label: 'N-2',
                  data: [['',0],['Mon', 70], ['Tue',80], ['Wed', 80], ['Thu', 75], ['Fri', 80],['Sat',90],['Sun',100]]
                    }, 
                {
                  label: 'Prediction',
                  data: [['',0],['Mon', 60], ['Tue',80], ['Wed', 70], ['Thu', baggage_prediction[0]], ['Fri', baggage_prediction[1]],['Sat',baggage_prediction[2]],['Sun',baggage_prediction[3]]]
                    },
              ],
          
          'tableval' :
              [
                {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '155'},
                {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '100 '},
                {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
                {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
                {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
              ]
          
        }
      }
  },

  //1
{"Delhi":
{
  "name":"Delhi",
        "about":{
          portname:'Indira Gandhi International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://quidosithe.tk/wp-content/uploads/sites/14/2020/03/Delhi-13thMarch.jpg',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
  "parking":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'16', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'40', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'17' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'32', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 193], ['Tue',30], ['Wed', 88]]
          },
          {
            label: 'N-1',
            data: [['',0],['Mon', 110], ['Tue',35], ['Wed', 50], ['Thu', 81], ['Fri', 173],['Sat',181],['Sun',188]]
          },
          {
            label: 'N-2',
            data: [['',0],['Mon', 143], ['Tue',10], ['Wed', 25], ['Thu', 70], ['Fri', 180],['Sat',79],['Sun',200]]
          },  
        ],

        'tableval' : 
        [
          {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '30 '},
          {'id': '2', 'floor': 'P1', 'service': 'Car Parking    ', 'paid': '500 '},
          {'id': '3', 'floor': 'P1', 'service': 'Bike   ', 'paid': '85'},
          {'id': '4', 'floor': 'P1', 'service': 'Taxi           ', 'paid': '100'},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ] 
    
  },
  "customer":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'67', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'30', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'20' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'92', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 91], ['Tue',54], ['Wed', 121]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 54], ['Tue',16], ['Wed', 50], ['Thu', 20], ['Fri', 130],['Sat',160],['Sun',130]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 154], ['Tue',36], ['Wed', 55], ['Thu', 25], ['Fri', 150],['Sat',150],['Sun',190]]
              },  
        ],
        
        'tableval' : [
          {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '100'},
          {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': 'Free'},
          {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '50'},
          {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '500'},
          {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '87'}
        ] 
    
  },
  "baggage":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'83', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'70' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'up'},
          {'pathcolor':'#BC82A6', 'percentage':'35', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'down'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 43], ['Tue',98], ['Wed', 71]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 130], ['Tue',60], ['Wed', 115], ['Thu', 75], ['Fri', 287],['Sat',216],['Sun',190]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 70], ['Tue',85], ['Wed', 15], ['Thu', 125], ['Fri', 167],['Sat',140],['Sun',200]]
              }, 
        ],
        
        'tableval' :
        [
          {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '50 '},
          {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '120 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ]
    
  }
}
},

//2
{"Seoul":
{
  "name":"Seoul",
        "about":{
          portname:'Incheon International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://cdn.theculturetrip.com/wp-content/uploads/2018/04/incheonintnl.jpg',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
  "parking":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'76', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'10', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'27' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'63', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 145], ['Tue',87], ['Wed', 30]]
          },
          {
            label: 'N-1',
            data: [['',0],['Mon', 150], ['Tue',90], ['Wed', 40], ['Thu', 87], ['Fri', 110],['Sat',97],['Sun',230]]
          },
          {
            label: 'N-2',
            data: [['',0],['Mon', 120], ['Tue',73], ['Wed', 25], ['Thu', 54], ['Fri', 150],['Sat',127],['Sun',198]]
          },  
        ],

        'tableval' : 
        [
          {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '50 '},
          {'id': '2', 'floor': 'P1', 'service': 'Valet Parking  ', 'paid': '100  '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ] 
    
  },
  "customer":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'79', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'43', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'12' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'89', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 80], ['Tue',40], ['Wed', 20]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 60], ['Tue',20], ['Wed', 60], ['Thu', 10], ['Fri', 90],['Sat',71],['Sun',96]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 70], ['Tue',30], ['Wed', 55], ['Thu', 30], ['Fri', 82],['Sat',69],['Sun',90]]
              },  
        ],
        
        'tableval' : [
          {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '75 '},
          {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': 'Free'},
          {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '50'},
          {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '600'},
          {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '35'}
        ] 
    
  },
  "baggage":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'91', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'73' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'38', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 30], ['Tue',68], ['Wed', 49]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 56], ['Tue',69], ['Wed', 25], ['Thu', 75], ['Fri', 85],['Sat',76],['Sun',92]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 40], ['Tue',20], ['Wed', 50], ['Thu', 65], ['Fri', 80],['Sat',90],['Sun',100]]
              }, 
        ],

        'tableval' :
        [
          {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '20 '},
          {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '150 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ]
    
  }
}
},

//3
{"Washington":
{
  "name":"Washington",
        "about":{
          portname:'Washington Dulles International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://biz.loudoun.gov/wp-content/uploads/2018/02/2013_MG_0190-m.jpg',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
  "parking":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'56', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'40', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'67' ,'icon':'fa fa-taxi fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'22', 'icon':'fa fa-bus fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20]]
          },
          {
            label: 'N-1',
            data: [['',0],['Mon', 50], ['Tue',20], ['Wed', 40], ['Thu', 20], ['Fri', 80],['Sat',60],['Sun',30]]
          },
          {
            label: 'N-2',
            data: [['',0],['Mon', 20], ['Tue',30], ['Wed', 25], ['Thu', 30], ['Fri', 80],['Sat',50],['Sun',50]]
          },  
        ],

        'tableval' : 
        [
          {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '$5 '},
          {'id': '2', 'floor': 'P1', 'service': 'Valet Parking  ', 'paid': '$45 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ] 
    
  },
  "customer":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'36', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'69', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'20' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 80]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 60], ['Tue',20], ['Wed', 50], ['Thu', 20], ['Fri', 30],['Sat',60],['Sun',30]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 70], ['Tue',30], ['Wed', 55], ['Thu', 30], ['Fri', 50],['Sat',50],['Sun',90]]
              },  
        ],
        
        'tableval' : [
          {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '$2'},
          {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': 'Free'},
          {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '$10'},
          {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '$80'},
          {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '$5'}
        ] 
    
  },
  "baggage":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'95', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'100', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'80' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'82', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 60], ['Tue',80], ['Wed', 70]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 70], ['Tue',60], ['Wed', 65], ['Thu', 75], ['Fri', 87],['Sat',76],['Sun',90]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 70], ['Tue',80], ['Wed', 80], ['Thu', 75], ['Fri', 80],['Sat',90],['Sun',100]]
              }, 
        ],

        'tableval' :
        [
          {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '$1'},
          {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '$10 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ]
    
  }
}
},

//4
{"Seattle":
{
  "name":"Seattle",
        "about":{
          portname:'Seattle-Tacoma International Airport',
          tagline:'Where Dreams Take Flight',
          plotheading:'Passenger Air Traffic Rates',
          scale:'per 1,000 inhabitants',
          imgsrc:'https://transportationtodaynews.com/wp-content/uploads/2019/07/shutterstock_662230153.jpg',
          description:'The new iconic Terminal 2 is India’s first and most advanced vertical passenger terminal that integrates world class design, architecture, infrastructure and operational efficiency, with a rich infusion of Indian heritage and cultural character. The transformation of CSMIA, a brown-field project, is a one-of-its-kind unique infrastructural project in the world, unlike any other airport development projects. With a vision to become one of the world’s best airports, GVK has been continuously and consistently upgrading CSMIA to an airport that delights its guests by offering best in class comfort and convenience.'

        },
  "parking":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'78', 'icon':'fa fa-car fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'53', 'icon':'fa fa-motorcycle fa-2x' ,'arrow':'down'},
          {'pathcolor':'#ABD99E','percentage':'87' ,'icon':'fa fa-taxi fa-2x', 'arrow':'up'},
          {'pathcolor':'#BC82A6', 'percentage':'17', 'icon':'fa fa-bus fa-2x', 'arrow':'down'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 39], ['Tue',51], ['Wed', 23]]
          },
          {
            label: 'N-1',
            data: [['',0],['Mon', 70], ['Tue',59], ['Wed', 40], ['Thu', 60], ['Fri', 75],['Sat',50],['Sun',90]]
          },
          {
            label: 'N-2',
            data: [['',0],['Mon', 50], ['Tue',34], ['Wed', 25], ['Thu', 60], ['Fri', 83],['Sat',63],['Sun',99]]
          },  
        ],

        'tableval' : 
        [
          {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '$7 '},
          {'id': '2', 'floor': 'P1', 'service': 'Valet Parking  ', 'paid': '$50 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ] 
    
  },
  "customer":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'78', 'icon':'fa fa-cutlery fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'12', 'icon':'fa fa-shopping-bag fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'37' ,'icon':'fa fa-plus-square fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'91', 'icon':'fa fa-glass fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 50], ['Tue',70], ['Wed', 60]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 65], ['Tue',20], ['Wed', 45], ['Thu', 13], ['Fri', 60],['Sat',70],['Sun',40]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 80], ['Tue',30], ['Wed', 65], ['Thu', 40], ['Fri', 68],['Sat',80],['Sun',90]]
              },  
        ],
        
        'tableval' : [
          {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '$5 '},
          {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': 'Free'},
          {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '$5'},
          {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '$75'},
          {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '$1'}
        ] 
    
  },
  "baggage":
  {
    'circledata':
        [
          {'pathcolor':'#EC5C5C', 'percentage':'75', 'icon':'fa fa-suitcase fa-2x', 'arrow':'up'},
          {'pathcolor':'#5FE2C5' ,'percentage':'89', 'icon':'fa fa-sign-in fa-2x' ,'arrow':'up'},
          {'pathcolor':'#ABD99E','percentage':'43' ,'icon':'fa fa-shopping-cart fa-2x', 'arrow':'down'},
          {'pathcolor':'#BC82A6', 'percentage':'65', 'icon':'fa fa-check-square-o fa-2x', 'arrow':'up'}
        ],
    'chartdata':
        [
          {
            label: 'N',
            data: [['',0],['Mon', 20], ['Tue',80], ['Wed', 50]]
              },
          {
            label: 'N-1',
            data: [['',0],['Mon', 70], ['Tue',31], ['Wed', 65], ['Thu', 45], ['Fri', 87],['Sat',76],['Sun',100]]
              },
          {
            label: 'N-2',
            data: [['',0],['Mon', 40], ['Tue',80], ['Wed', 70], ['Thu', 75], ['Fri', 80],['Sat',90],['Sun',100]]
              }, 
        ],

        'tableval' :
        [
          {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '$2 '},
          {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '$20 '},
          {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
          {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '   '},
          {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
        ]
    
  }
}
}
]
export default data_app1
