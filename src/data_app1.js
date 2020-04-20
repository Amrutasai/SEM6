 const data_app1=[
    {"Mumbai":
        {
          "name":"Mumbai",
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
                  {'id': '1', 'floor': 'LG', 'service': 'Trolley', 'paid': '100'},
                  {'id': '2', 'floor': 'P1', 'service': 'Valet Parking  ', 'paid': '500'},
                  {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
                  {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '  '},
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
                  {'id': '1', 'floor': 'LG', 'service': 'Water  ', 'paid': '100'},
                  {'id': '2', 'floor': 'P1', 'service': 'Restrooms      ', 'paid': '255'},
                  {'id': '3', 'floor': 'P2', 'service': 'Medical', 'paid': '87'},
                  {'id': '4', 'floor': 'P2', 'service': 'Food & Beverage', 'paid': '87'},
                  {'id': '5', 'floor': 'P2', 'service': 'Help Desk', 'paid': '87'}
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
                  {'id': '1', 'floor': 'LG', 'service': 'Belts  ', 'paid': '100'},
                  {'id': '2', 'floor': 'P1', 'service': 'Weighing Scales', 'paid': '255'},
                  {'id': ' ', 'floor': '  ', 'service': '       ', 'paid': '  '},
                  {'id': ' ', 'floor': '  ', 'service': '               ', 'paid': '  '},
                  {'id': ' ', 'floor': '  ', 'service': '         ', 'paid': '  '}
                ]
            
          }
        }
    }
  ]
export default data_app1