const parking_array=[55.294245443708895,66.59706171719768,58.689026837418716,62.765296030589404]
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
                  {
                    label: 'Prediction',
                    data: [['',0],['Mon', 60], ['Tue',40], ['Wed', 20], ['Thu', parking_array[0]], ['Fri', parking_array[1]],['Sat',parking_array[2]],['Sun',parking_array[3]]]
                  },  
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
                ]
            
          }
        }
    }
  ]
export default data_app1