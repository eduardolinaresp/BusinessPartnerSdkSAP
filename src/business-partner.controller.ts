import { Controller, Get, HttpException } from '@nestjs/common';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller()
export class BusinessPartnerController {
  @Get('business-partners')
  getBusinessPartners() {
    return getAllBusinessPartners()
      .catch(error => {
        throw new HttpException(`Failed to get business partners - ${error.message}`, 500);
      });
  }
}

function getAllBusinessPartners(): Promise<BusinessPartner[]> {
  return BusinessPartner.requestBuilder()
    .getAll()
 /**    .withCustomHeaders({ APIKey: '<your key>'})
    .execute({
      url: 'https://sandbox.api.sap.com/s4hanacloud',
      
    });**/
    /**
    .execute({
      url: 'http://localhost:3000'
    });
    ;**/
    .execute({
      destinationName: 'bupa-mock'
    });


}