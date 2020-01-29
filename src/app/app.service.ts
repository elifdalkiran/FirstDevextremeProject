import {Injectable} from '@angular/core';

export class Company {
  ID: number;
  CompanyName: string;
  // Address: string;
  // City: string;
  // Temperature: number;
  // State: string;
  // Zipcode: number;
  // Phone: string;
  // Fax: string;
  // Website: string;
  Revenue: number;
  Expense: number;
  Month: string;
}

const company: Company[] = [{
  ID: 1,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 25,
  // State: 'Arkansas',
  // Zipcode: 72716,
  // Phone: '(800) 555-2797',
  // Fax: '(800) 555-2171',
  // Website: 'http://www.nowebsitesupermart.com',
  Revenue: 2000,
  Expense: 1500,
  Month: 'January'
}, {
  ID: 2,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 12,
  // State: 'Georgia',
  // Zipcode: 30339,
  // Phone: '(800) 595-3232',
  // Fax: '(800) 595-3231',
  // Website: 'http://www.nowebsitedepot.com',
  Revenue: 5000,
  Expense: 3000,
  Month: 'February'
}, {
  ID: 3,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 13,
  // State: 'Minnesota',
  // Zipcode: 55403,
  // Phone: '(612) 304-6073',
  // Fax: '(612) 304-6074',
  // Website: 'http://www.nowebsitemusic.com',
  Revenue: 6000,
  Expense: 5000,
  Month: 'March'
}, {
  ID: 4,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 15,
  // State: 'Washington',
  // Zipcode: 98027,
  // Phone: '(800) 955-2292',
  // Fax: '(800) 955-2293',
  // Website: 'http://www.nowebsitetomsclub.com',
  Revenue: 15000,
  Expense: 16000,
  Month: 'April'
}, {
  ID: 5,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 26,
  // State: 'Illinois',
  // Zipcode: 60179,
  // Phone: '(847) 286-2500',
  // Fax: '(847) 286-2501',
  // Website: 'http://www.nowebsiteemart.com',
  Revenue: 10000,
  Expense: 2000,
  Month: 'May'
}, {
  ID: 6,
  CompanyName: 'Super Mart of the West',
  // Address: 'Bentonville',
  // City: 'Deerfield',
  // Temperature: 40,
  // State: 'Illinois',
  // Zipcode: 60015,
  // Phone: '(847) 940-2500',
  // Fax: '(847) 940-2501',
  // Website: 'http://www.nowebsitewalters.com',
  Revenue: 200,
  Expense: 300,
  Month: 'June'
}, {
  ID: 7,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 30,
  // State: 'Texas',
  // Zipcode: 76102,
  // Phone: '(817) 820-0741',
  // Fax: '(817) 820-0742',
  // Website: 'http://www.nowebsiteshack.com',
  Revenue: 65000,
  Expense: 5300,
  Month: 'July'
}, {
  ID: 8,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 32,
  // State: 'Illinois',
  // Zipcode: 60523,
  // Phone: '(800) 955-2929',
  // Fax: '(800) 955-9392',
  // Website: 'http://www.nowebsitecircuittown.com',
  Revenue: 12000,
  Expense: 5000,
  Month: 'August'
}, {
  ID: 9,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 29,
  // State: 'Minnesota',
  // Zipcode: 55423,
  // Phone: '(612) 291-1000',
  // Fax: '(612) 291-2001',
  // Website: 'http://www.nowebsitepremierbuy.com',
  Revenue: 3000,
  Expense: 4000,
  Month: 'September'
}, {
  ID: 10,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 14,
  // State: 'Illinois',
  // Zipcode: 60563,
  // Phone: '(630) 438-7800',
  // Fax: '(630) 438-7801',
  // Website: 'http://www.nowebsiteelectrixmax.com',
  Revenue: 9000,
  Expense: 1000,
  Month: 'October'
}, {
  ID: 11,
  CompanyName: 'Super Mart of the West',
  // Address: 'Bentonville',
  // City: 'Dallas',
  // Temperature: 36,
  // State: 'Texas',
  // Zipcode: 75270,
  // Phone: '(214) 854-3000',
  // Fax: '(214) 854-3001',
  // Website: 'http://www.nowebsitevideoemporium.com',
  Revenue: 85000,
  Expense: 40000,
  Month: 'November'
}, {
  ID: 12,
  CompanyName: 'Super Mart of the West',
  // Address: '702 SW 8th Street',
  // City: 'Bentonville',
  // Temperature: 10,
  // State: 'North Carolina',
  // Zipcode: 28117,
  // Phone: '(800) 445-6937',
  // Fax: '(800) 445-6938',
  // Website: 'http://www.nowebsitescreenshop.com',
  Revenue: 2000,
  Expense: 1500,
  Month: 'December'
}];


@Injectable()
export class Service {
  getCompany() {
    return company;
  }

  getData() {
    return company;
  }
}

export class AppService {
}
