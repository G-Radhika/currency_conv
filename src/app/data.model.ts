export type Curriencies = "USD" | "EUR" | "INR";

export interface Currency {
  name: string;
  code: string;
  
}

export const curriencies: Currency[] = [
  {name: "United States Dollar", code: "USD"},
  {name: "Euro", code: "EUR"},
  {name: "Indian Rupee", code: "INR"},
];

type exchangeInfo = Record<Curriencies, number>;


export type RecordInfo = Record<Curriencies, number>;


export const exchangeRate: Record<Curriencies, Record<string, RecordInfo>>= {
  "USD": {
    rates_info: {
      "USD": 1,    
      "EUR": 0.8,
      "INR": 75,
    },
  },
  "EUR": {
    rates_info: {
      "USD": 1.25,
      "EUR": 1,   
      "INR": 90,
    },
  },
  "INR": {
    rates_info: {
      "USD": 0.013,
      "EUR": 0.011,
      "INR": 1, 
    },
  },
};


const exchangeRate2 = {
  "USD": {
    recordInfo: {
      "USD": 1,    
      "EUR": 0.8,
      "INR": 75,
    },
  },
};

// exchangeRate["USD"]['record_info']["EUR"];
// exchangeRate2.USD.recordInfo.INR;
