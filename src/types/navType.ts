import social_f from '../shared/icons/social_f.svg'
import social_in from '../shared/icons/social_in.svg'

export enum manufacturersType {
    abb = 'ABB',
    bosch = 'Bosch',
    omron = 'Omron',
    danfoss = 'Danfoss',
    phoenixContact = 'Phoenix Contact',
    schneiderElectric = 'Schneider Electric',
    mitsubishiElectric = 'Mitsubishi Electric',
    '+100' = '+100',
}

export enum aboutType {
    mission = 'Mission',
    values = 'Values',
    imprint = 'Imprint',
    dataPrivacy = 'Data privacy',
    termsOfUse = 'Terms of use',
    SentenceSorting = 'Sentence sorting',
}

export enum serviceType {
    search = 'Search',
    priceComparison = 'Price comparison'
}

export const socialMedia = [
    {icon: social_f, link: ''},
    {icon: social_in, link: ''},
]

export type allTypes = typeof manufacturersType | typeof aboutType;