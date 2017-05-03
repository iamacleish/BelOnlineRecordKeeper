import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let countries =[
      {
        id: 1,
        name: 'USA',
        realms: [{
          id: 1,
          name: 'Scarfland'},
          {
          id: 2,
           name: 'Nermaner',
          }]
      },
      {
        id: 2,
        name: 'Canada',
        realms: [{
            id: 4,
            name: 'Underull'
          },
          {
            id: 5,
            name: 'Fishmen'
          }]
      }
    ]

    let realms = [
      {
        id: 1,
        name: 'Scarfland'
      },
      {
        id: 2,
         name: 'Nermaner'
      },
      {
        id: 3,
         name: 'Buttforte'
      },
      {
        id: 4,
         name: 'Underull'
      },
      {
        id: 5,
         name: 'Fishmen'
      },
      {
        id: 6,
         name: 'Mellonrod'
      },
      {
        id: 7,
         name: 'Gayhaven'
      },
      {
        id: 8,
         name: 'Cheezeland'
      },
      {
        id: 9,
         name: 'Magma House'
      },
      {
        id: 10,
         name: 'Tornado Town'
      }
    ];
    let users = [
        {
          realm_id:1,
          name:'Torix'
        },
        {
          realm_id:1,
          name:'Derian'
        },
        {
          realm_id:2,
          name:'Kegg'
        },
        {
          realm_id:2,
          name:'Torry'
        },
        {
          realm_id:2,
          name:'Himmel'
        }
    ]

    return {users, realms, countries};
  }
}
