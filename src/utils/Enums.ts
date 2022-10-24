export enum ECoin {
    Bitcoin = 'Bitcoin',
    Etherium = 'Etherium',
    Monero = 'Monero'
}

export enum EServiceType {
    Building = 'Building',
    Health = 'Health',
    Sanitation = 'Sanitation',
    Education = 'Education',
    Security = 'Security'
}

export enum EOrderStatus {
    Opened = 'Opened',
    Canceled = 'Canceled',
    WaitingForSupplies = 'WaitingForSupplies',
    SupplyApproved = 'SupplyApproved',
    FundRaising = 'FundRaising',
    FundFinished = 'FundFinished',
    ServiceInProgress = 'ServiceInProgress',
    ServiceFinished = 'ServiceFinished',
    ServiceCanceled = 'ServiceCanceled',
    ReturnedFunds = 'ReturnedFunds'
}