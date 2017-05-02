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
          id: 1,
          name: 'Thunder People'},
          {
          id: 2,
           name: 'Hipster Bay',
          }]
      }
    ]

    let realms = [
      {
        id: 1,
        name: 'Scarfland',
        realmMembers: [
          {
            id:1,
            name:'Torix'
          },
          {
            id:2,
            name:'Derian'
          }
        ]
      },
      {
        id: 2,
         name: 'Nermaner',
         realmMembers: [
           {
             id:1,
             name:'Kegg'
           },
           {
             id:2,
             name:'Pookie'
           },
           {
             id:3,
             name:'Himmel'
           }
         ]
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
    return {realms, countries};
  }
}
