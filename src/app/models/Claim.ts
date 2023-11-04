export class Claim {
    id: number;
    subject : string;
    description : string;
    claim_date : Date;
    status : string;
    claimantEmail : string;
    claimantName : string;
    responseCount : string;
}


export enum Status {
    PENDING = 'PENDING',
    INPROGRESS = 'INPROGRESS',
    RESOLVED = 'RESOLVED'
}
