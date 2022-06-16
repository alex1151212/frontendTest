const data = {
  users: [
    {
      email: 'admin@example.com',
      password: '123456',
    },
    {
      email: 'user@example.com',
      password: '123456',
    },
  ],
  datas: [
    {
      id: '1',
      type: '信心值過低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T12:30:00',
    },
    {
      id: '2',
      type: '信心值低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T12:30:00',
    },
    {
      id: '3',
      type: '信心值過低',
      msgContent: '目前信心值為:89%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-01T13:30:00',
    },
    {
      id: '4',
      type: '信心值過低',
      msgContent: '目前信心值為:81%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T13:30:00',
    },
    {
      id: '5',
      type: '信心值過低',
      msgContent: '目前信心值為:79%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-01T13:30:00',
    },
    {
      id: '6',
      type: '信心值低',
      msgContent: '目前信心值為:80%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T14:30:00',
    },
    {
      id: '7',
      type: '信心值低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-01T14:30:00',
    },
    {
      id: '8',
      type: '信心值過低',
      msgContent: '目前信心值為:83%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-01T14:30:00',
    },
    {
      id: '9',
      type: '信心值過低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T14:30:00',
    },
    {
      id: '10',
      type: '信心值高',
      msgContent: '目前信心值為:90%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-01T15:30:00',
    },
    {
      id: '11',
      type: '信心值高',
      msgContent: '目前信心值為:92%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-01T15:30:00',
    },
    {
      id: '12',
      type: '信心值高',
      msgContent: '目前信心值為:96%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-01T15:30:00',
    },
    {
      id: '13',
      type: '信心值高',
      msgContent: '目前信心值為:91%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T16:30:00',
    },
    {
      id: '14',
      type: '信心值過低',
      msgContent: '目前信心值為:88%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-01T16:30:00',
    },
    {
      id: '15',
      type: '信心值過低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-01T16:30:00',
    },
    {
      id: '16',
      type: '信心值低',
      msgContent: '目前信心值為:89%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-02T12:30:00',
    },
    {
      id: '17',
      type: '信心值高',
      msgContent: '目前信心值為:90%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-02T12:30:00',
    },
    {
      id: '18',
      type: '信心值過低',
      msgContent: '目前信心值為:91%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-02T12:30:00',
    },
    {
      id: '19',
      type: '信心值過低',
      msgContent: '目前信心值為:85%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-02T12:30:00',
    },
    {
      id: '20',
      type: '信心值低',
      msgContent: '目前信心值為:83%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-02T12:30:00',
    },
    {
      id: '21',
      type: '信心值低',
      msgContent: '目前信心值為:80%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-03T12:30:00',
    },
    {
      id: '22',
      type: '信心值過低',
      msgContent: '目前信心值為:84%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-03T12:30:00',
    },
    {
      id: '23',
      type: '信心值過低',
      msgContent: '目前信心值為:81%',
      msgNote: '骰盅編號:1002',
      range: '近7天',
      time: '2022-06-03T12:30:00',
    },
    {
      id: '24',
      type: '信心值過低',
      msgContent: '目前信心值為:84%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-04T12:30:00',
    },
    {
      id: '25',
      type: '信心值低',
      msgContent: '目前信心值為:86%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-04T12:30:00',
    },
    {
      id: '26',
      type: '信心值低',
      msgContent: '目前信心值為:88%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-04T12:30:00',
    },
    {
      id: '27',
      type: '信心值過低',
      msgContent: '目前信心值為:87%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-04T12:30:00',
    },
    {
      id: '28',
      type: '信心值高',
      msgContent: '目前信心值為:90%',
      msgNote: '骰盅編號:1000',
      range: '近7天',
      time: '2022-06-05T12:30:00',
    },
    {
      id: '29',
      type: '信心值高',
      msgContent: '目前信心值為:90%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-05T13:30:00',
    },
    {
      id: '30',
      type: '信心值高',
      msgContent: '目前信心值為:90%',
      msgNote: '骰盅編號:1001',
      range: '近7天',
      time: '2022-06-05T14:30:00',
    },
  ],
};

export default data;