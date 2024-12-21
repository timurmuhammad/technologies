import unavailable from "../shared/icons/unavailable.svg";
import standart from "../shared/icons/standart.svg";
import fast from "../shared/icons/fast.svg";

import industryMall from "../shared/static/img/industry_mall.png";
import fullyAutomation from "../shared/static/img/fullyautomation.png";
import automation24 from "../shared/static/img/automation24.png";
import jsElectronics from "../shared/static/img/jc_electronics.png";
import spsService from "../shared/static/img/sps_service.png";
import wiautomation from "../shared/static/img/wiautomation.png";
import unknown from '../shared/icons/unknown.svg'

export const featuresType = [
    {
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['101', '12'],
        shipping:  [fast.src, 'Fast', '1'],
        company: [automation24.src, 'Automation24.de'],
        link: '/',
    },
    {  
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['104', '12'],
        shipping:  [fast, 'Fast', '1'],
        company: [fullyAutomation.src, 'Fullyautomation.com'],
        link: '/',
    },
    {
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['105', '8'],
        shipping:  [standart, 'Fast', '5'],
        company: [jsElectronics.src, 'JS-Electronics.com'],
        link: '/',
    },
    {
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['106', '10'],
        shipping:  [standart, 'Fast', '3'],
        company: [spsService.src, 'SPS-SERVICE.eu'],
        link: '/',
    },
    {
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['106', '12'],
        shipping:  [unavailable, 'Fast', ''],
        company: [industryMall.src, 'Industry-mall.net'],
        link: '/',
    },
    {  
        name: 'Siemens SIMATIC DP F-RQ 1x 24VDC / 24..230VAC / 5A ST-6ES7136-6RA00-0BF0',
        price: ['119', '5'],
        shipping:  [unavailable, 'Fast', ''],
        company: [wiautomation.src, 'Wiautomation.com'],
        link: '/',
    }
]

export const delivery = {
    fast: {icon: fast.src, name: 'Fast', speed: ''},
    standart: {icon: standart.src, name: 'Fast', speed: ''},
    unavailable: {icon: unavailable.src, name: 'Unavailable', speed: ''},
    unknown: {icon: unknown.src, name: 'Unknown', speed: ''},
}