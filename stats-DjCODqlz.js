import{g as a}from"./gql-f3x5Sumy.js";const u=a(`
  query budgetSummary {
    summary: latestAPBDSummary {
      expense
      income
      financingExpense
      financingIncome
      year
    }
  }
`),s=a(`
  query populationSummary {
    summary: populationStatistic {
      total
      male
      female
      temporary
      mutation
      mutationOut     { value }
      statusInFamily  { name value }
    }
  }
`),i=a(`
  query populationMutationSummary {
    summary: populationStatistic {
      total
      mutationOut { value }
    }
  }
`),n=a(`
  query stunting {
    stunting(limit: 3) {
      year
      keluargaSasaran
      berisiko
      baduta
      balita
      pasanganUsiaSubur
      pasanganUsiaSuburHamil
    }
  }
`),e=a(`
  query visitStats {
    stats: visitorStatistic {
      total
      today
      yesterday
      thisWeek
      lastWeek
      thisMonth
      lastMonth
    }
  }
`);export{s as a,u as b,i as p,n as s,e as v};
