import{g as e}from"./gql-f3x5Sumy.js";const t=e(`
  query desaProfile {
    profile {
      vision
      mission
      history { photoURL content }
      borders { name value }
      area
      BPDChart
      SPDChart
    }
  }
`),r=e(`
  query importantContacts {
    contacts: importantContacts {
      name
      contact
      order
      ID
    }
  }
`),a=e(`
  query externalLinks {
    links: externalLinks {
      name
      URL
      order
      ID
    }
  }
`),n=e(`
  query welcome {
    profile {
      welcome {
        backgroundURL
        content
        personName
        personRole
        photoURL
      }
    }
  }
`),s=e(`
  query map {
    profile {
      map {
        point {
          latitude
          longitude
        }
        level
        customGeospatialURL
      }
    }
  }
`);export{t as d,a as e,r as i,s as m,n as w};
