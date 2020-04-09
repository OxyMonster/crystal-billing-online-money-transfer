import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinesComponent } from './billing-auto/fines/fines.component';
import { ParkingComponent } from './billing-auto/parking/parking.component';
import { BanksComponent } from './billing-finance/banks/banks.component';
import { ElectronicMoneyComponent } from './billing-finance/electronic-money/electronic-money.component';
import { ElectronicServicesWebsitesComponent } from './billing-finance/electronic-services-websites/electronic-services-websites.component';
import { InsuranceServicesComponent } from './billing-finance/insurance-services/insurance-services.component';
import { MicrofinanceOrganizaionsComponent } from './billing-finance/microfinance-organizaions/microfinance-organizaions.component';
import { TelecomsCompaniesComponent } from './billing-telecoms/telecoms-companies/telecoms-companies.component';
import { TelecomsInternetComponent } from './billing-telecoms/telecoms-internet/telecoms-internet.component';
import { TelecomsPhoneFixedComponent } from './billing-telecoms/telecoms-phone-fixed/telecoms-phone-fixed.component';
import { TelecomsPhoneMobileComponent } from './billing-telecoms/telecoms-phone-mobile/telecoms-phone-mobile.component';
import { TelecomsTelevisionComponent } from './billing-telecoms/telecoms-television/telecoms-television.component';

const COMPONENTS = [
  FinesComponent,
  ParkingComponent,
  BanksComponent,
  ElectronicMoneyComponent,
  ElectronicServicesWebsitesComponent,
  InsuranceServicesComponent,
  MicrofinanceOrganizaionsComponent,
  TelecomsCompaniesComponent,
  TelecomsInternetComponent,
  TelecomsPhoneFixedComponent,
  TelecomsPhoneMobileComponent,
  TelecomsTelevisionComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule  
  ],
  exports: COMPONENTS
})
export class UserProfileBillingModule { }
