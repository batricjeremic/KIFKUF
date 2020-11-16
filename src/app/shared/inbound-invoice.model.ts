import { DecimalPipe } from '@angular/common';
import { NumberValueAccessor } from '@angular/forms';

export class InboundInvoice {
    taxPeriod : string;
    ordinalNumber : number;
    documentType : string;
    documentNumber : string;
    documentDate : string;
    documentRecordDate : string;
    supplierName : string;
    supplierAddress : string;
    supplierVATNumber : string;
    businessEntityId : string;
    netAmount : number;
    grossAmount : number;
    lumpSum : number;
    inboundVAT : number;
    deductibleVAT : number;
    nonDeductibleVAT : number;
}
