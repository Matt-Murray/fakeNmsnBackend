// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const startingNmsnReferralList = [
    {
        nmsnReferralId: '01',
        employerFein: '12121234',
        employeeSsn: '123456789',
        caseNum: '11223344',
        caseTypeCd: 'AF',
        medInsurOrderedFlag: 'Y',
        nmsnCountryCd: 'US',
        nmsnStateCd: 'GA',
        courtName: 'Eleventh Circuit',
        courtOrderId: '11111111',
        courtOrderDt: new Date(),
        employeeAdweNtePct: 0,
        employeeCsoMaxPremium: 0,
        insuranceStatusCd: 'ACTIVE',
        planStatusCd: 'ACTIVE',
        eligibilityDt: new Date(),
        nonCustodialName: 'Vader, Darth',
        nmsnReferralReportTypeCd: 'MN',
        nmsnReferralStatusCd: 'ACCEPTED',
        nmsnReferralNmsnResponseList: [],
        nmsnReferralNmsnreferCoverageList: [{
            itemValue: "humanaMedicalPMO",
            itemLabel:  "Humana PMO"
        },
        {
            itemValue: "blueCrossBlueShieldHMO",
            itemLabel: "Blue Cross Blue Shield HMO"
        }],
        nmsnReferralNmsnreferDependentList: [{
            childName: 'Skywalker, Luke',
            childSsn: '***-**-1223',
            childDOB: new Date("May 25, 1977 01:15:00"),
            childEnrolledFlag: true,
            childIneligibleFlag: false
        },
        {
            childName: 'Organa, Leia',
            childSsn: '***-**-1234',
            childDOB: new Date("May 25, 1977 01:15:00"),
            childEnrolledFlag: true,
            childIneligibleFlag: false
        }],
        nmsnReferralNmsnreferPersorgList: [],
    },
    {
        nmsnReferralId: '02',
        employerFein: '12121234',
        employeeSsn: '987654321',
        caseNum: '2222222',
        caseTypeCd: 'AF',
        medInsurOrderedFlag: 'Y',
        nmsnCountryCd: 'US',
        nmsnStateCd: 'GA',
        courtName: 'Eleventh Circuit',
        courtOrderId: '33333',
        courtOrderDt: new Date(),
        employeeAdweNtePct: 0,
        employeeCsoMaxPremium: 0,
        insuranceStatusCd: 'ACTIVE',
        planStatusCd: 'ACTIVE',
        eligibilityDt: new Date('July 21, 2019 01:15:00'),
        nonCustodialName: 'Yorke, Thom',
        nmsnReferralReportTypeCd: 'MN',
        nmsnReferralStatusCd: 'ACCEPTED',
        nmsnReferralNmsnResponseList: [],
        nmsnReferralNmsnreferCoverageList: [{
            itemValue: "humanaMedicalPMO",
            itemLabel:  "Humana PMO"
        },
        {
            itemValue: "blueCrossBlueShieldHMO",
            itemLabel: "Blue Cross Blue Shield HMO"
        }],
        nmsnReferralNmsnreferDependentList: [],
        nmsnReferralNmsnreferPersorgList: [],
    },
        {
            nmsnReferralId: '03',
            employerFein: '54815648',
            employeeSsn: '987654123',
            caseNum: '22554488',
            caseTypeCd: 'AF',
            medInsurOrderedFlag: 'Y',
            nmsnCountryCd: 'US',
            nmsnStateCd: 'MD',
            courtName: 'Super Circuit',
            courtOrderId: '11115111',
            courtOrderDt: new Date(),
            employeeAdweNtePct: 0,
            employeeCsoMaxPremium: 500,
            insuranceStatusCd: 'ACTIVE',
            planStatusCd: 'ACTIVE',
            eligibilityDt: new Date(),
            nonCustodialName: 'Peach, Princess',
            nmsnReferralReportTypeCd: 'MN',
            nmsnReferralStatusCd: 'ACCEPTED',
            nmsnReferralNmsnResponseList: [],
            nmsnReferralNmsnreferCoverageList: [{
                itemValue: "humanaMedicalHMO",
                itemLabel:  "Humana HMO"
            }],
            nmsnReferralNmsnreferDependentList: [
            {
                childName: 'Junior, Mario',
                childSsn: '***-**-6866',
                childDOB: new Date("June 23, 1984 01:15:00"),
                childEnrolledFlag: true,
                childIneligibleFlag: false
            }],
            nmsnReferralNmsnreferPersorgList: [],
        },
            {
                nmsnReferralId: '04',
                employerFein: '98989874',
                employeeSsn: '987321654',
                caseNum: '44332211',
                caseTypeCd: 'AF',
                medInsurOrderedFlag: 'Y',
                nmsnCountryCd: 'US',
                nmsnStateCd: 'AK',
                courtName: 'Yukon Circuit',
                courtOrderId: '88888888',
                courtOrderDt: new Date(),
                employeeAdweNtePct: 0,
                employeeCsoMaxPremium: 0,
                insuranceStatusCd: 'ACTIVE',
                planStatusCd: 'ACTIVE',
                eligibilityDt: new Date(),
                nonCustodialName: 'Driscoll, Mr.',
                nmsnReferralReportTypeCd: 'MN',
                nmsnReferralStatusCd: 'ACCEPTED',
                nmsnReferralNmsnResponseList: [],
                nmsnReferralNmsnreferCoverageList: [{
                    itemValue: "humanaMedicalPMO",
                    itemLabel:  "Humana PMO"
                },
                {
                    itemValue: "blueCrossBlueShieldHMO",
                    itemLabel: "Blue Cross Blue Shield HMO"
                }],
                nmsnReferralNmsnreferDependentList: [{
                    childName: 'Cantillo, Brock',
                    childSsn: '***-**-1223',
                    childDOB: new Date("May 25, 1997 01:15:00"),
                    childEnrolledFlag: true,
                    childIneligibleFlag: false
                }],
                nmsnReferralNmsnreferPersorgList: [],
            },
                {
                    nmsnReferralId: '05',
                    employerFein: '32323256',
                    employeeSsn: '987796321',
                    caseNum: '44556677',
                    caseTypeCd: 'AF',
                    medInsurOrderedFlag: 'Y',
                    nmsnCountryCd: 'US',
                    nmsnStateCd: 'NM',
                    courtName: 'First Appeals Circuit',
                    courtOrderId: '22222222',
                    courtOrderDt: new Date(),
                    employeeAdweNtePct: 0,
                    employeeCsoMaxPremium: 0,
                    insuranceStatusCd: 'ACTIVE',
                    planStatusCd: 'ACTIVE',
                    eligibilityDt: new Date(),
                    nonCustodialName: 'Goodman, Saul',
                    nmsnReferralReportTypeCd: 'MN',
                    nmsnReferralStatusCd: 'ACCEPTED',
                    nmsnReferralNmsnResponseList: [],
                    nmsnReferralNmsnreferCoverageList: [
                    {
                        itemValue: "blueCrossBlueShieldHMO",
                        itemLabel: "Blue Cross Blue Shield HMO"
                    }],
                    nmsnReferralNmsnreferDependentList: [{
                        childName: 'Goodman, Brain',
                        childSsn: '***-**-4224',
                        childDOB: new Date("March 15, 1991 01:15:38"),
                        childEnrolledFlag: true,
                        childIneligibleFlag: false
                    },
                    {
                        childName: 'Goodman, Gooby',
                        childSsn: '***-**-4321',
                        childDOB: new Date("May 31, 1981 01:14:00"),
                        childEnrolledFlag: true,
                        childIneligibleFlag: false
                    }],
                    nmsnReferralNmsnreferPersorgList: [],
                },
                   {
                       nmsnReferralId: '06',
                       employerFein: '78787896',
                       employeeSsn: '789456123',
                       caseNum: '55994488',
                       caseTypeCd: 'AF',
                       medInsurOrderedFlag: 'Y',
                       nmsnCountryCd: 'US',
                       nmsnStateCd: 'TX',
                       courtName: 'Second Municipal',
                       courtOrderId: '00000001',
                       courtOrderDt: new Date(),
                       employeeAdweNtePct: 0,
                       employeeCsoMaxPremium: 0,
                       insuranceStatusCd: 'ACTIVE',
                       planStatusCd: 'ACTIVE',
                       eligibilityDt: new Date(),
                       nonCustodialName: 'Montgomery, Brenna',
                       nmsnReferralReportTypeCd: 'MN',
                       nmsnReferralStatusCd: 'ACCEPTED',
                       nmsnReferralNmsnResponseList: [],
                       nmsnReferralNmsnreferCoverageList: [{
                           itemValue: "humanaAnimalPMO",
                           itemLabel:  "Animal PMO"
                       }],
                       nmsnReferralNmsnreferDependentList: [],
                       nmsnReferralNmsnreferPersorgList: [],
                   },
                       {
                           nmsnReferralId: '07',
                           employerFein: '9874568',
                           employeeSsn: '123789456',
                           caseNum: '00112233',
                           caseTypeCd: 'AF',
                           medInsurOrderedFlag: 'Y',
                           nmsnCountryCd: 'US',
                           nmsnStateCd: 'LA',
                           courtName: 'Parish Circuit',
                           courtOrderId: '00000055',
                           courtOrderDt: new Date(),
                           employeeAdweNtePct: 0,
                           employeeCsoMaxPremium: 0,
                           insuranceStatusCd: 'ACTIVE',
                           planStatusCd: 'ACTIVE',
                           eligibilityDt: new Date(),
                           nonCustodialName: 'Bates, Trudy',
                           nmsnReferralReportTypeCd: 'MN',
                           nmsnReferralStatusCd: 'ACCEPTED',
                           nmsnReferralNmsnResponseList: [],
                           nmsnReferralNmsnreferCoverageList: [
                           {
                               itemValue: "blueCrossBlueShieldHMO",
                               itemLabel: "Blue Cross Blue Shield HMO"
                           }],
                           nmsnReferralNmsnreferDependentList: [{
                               childName: 'Bates, Alex',
                               childSsn: '***-**-1223',
                               childDOB: new Date("February 01, 1993 12:15:00"),
                               childEnrolledFlag: false,
                               childIneligibleFlag: true
                           }],
                           nmsnReferralNmsnreferPersorgList: [],
                       },
                           {
                               nmsnReferralId: '08',
                               employerFein: '32323215',
                               employeeSsn: '45456789',
                               caseNum: '88776655',
                               caseTypeCd: 'AF',
                               medInsurOrderedFlag: 'Y',
                               nmsnCountryCd: 'US',
                               nmsnStateCd: 'LA',
                               courtName: 'Not Applicable',
                               courtOrderId: '12121212',
                               courtOrderDt: new Date(),
                               employeeAdweNtePct: 0,
                               employeeCsoMaxPremium: 0,
                               insuranceStatusCd: 'ACTIVE',
                               planStatusCd: 'ACTIVE',
                               eligibilityDt: new Date(),
                               nonCustodialName: 'Parsons, Connor',
                               nmsnReferralReportTypeCd: 'MN',
                               nmsnReferralStatusCd: 'ACCEPTED',
                               nmsnReferralNmsnResponseList: [],
                               nmsnReferralNmsnreferCoverageList: [{
                                   itemValue: "humanaMedicalPMO",
                                   itemLabel:  "Humana PMO"
                               },
                               {
                                   itemValue: "blueCrossBlueShieldHMO",
                                   itemLabel: "Blue Cross Blue Shield HMO"
                               }],
                               nmsnReferralNmsnreferDependentList: [],
                               nmsnReferralNmsnreferPersorgList: [],
                           },
                               {
                                   nmsnReferralId: '09',
                                   employerFein: '88445511',
                                   employeeSsn: '159489156',
                                   caseNum: '55114488',
                                   caseTypeCd: 'AF',
                                   medInsurOrderedFlag: 'Y',
                                   nmsnCountryCd: 'US',
                                   nmsnStateCd: 'TX',
                                   courtName: 'Dripping Springs Municipal Court',
                                   courtOrderId: '99999999',
                                   courtOrderDt: new Date(),
                                   employeeAdweNtePct: 0,
                                   employeeCsoMaxPremium: 0,
                                   insuranceStatusCd: 'ACTIVE',
                                   planStatusCd: 'ACTIVE',
                                   eligibilityDt: new Date(),
                                   nonCustodialName: 'Farmer, Kelley',
                                   nmsnReferralReportTypeCd: 'MN',
                                   nmsnReferralStatusCd: 'ACCEPTED',
                                   nmsnReferralNmsnResponseList: [],
                                   nmsnReferralNmsnreferCoverageList: [{
                                       itemValue: "humanaMedicalPMO",
                                       itemLabel:  "Humana PMO"
                                   },
                                   {
                                       itemValue: "blueCrossBlueShieldHMO",
                                       itemLabel: "Blue Cross Blue Shield HMO"
                                   }],
                                   nmsnReferralNmsnreferDependentList: [{
                                       childName: 'Murray, Matthew',
                                       childSsn: '***-**-2262',
                                       childDOB: new Date("August 7, 1991 01:15:00"),
                                       childEnrolledFlag: false,
                                       childIneligibleFlag: true
                                   },
                                   {
                                       childName: 'Murray, William',
                                       childSsn: '***-**-1233',
                                       childDOB: new Date("April 19, 1995 01:15:00"),
                                       childEnrolledFlag: true,
                                       childIneligibleFlag: false
                                   }],
                                   nmsnReferralNmsnreferPersorgList: [],
                               },
                                   {
                                       nmsnReferralId: '10',
                                       employerFein: '15948155',
                                       employeeSsn: '115599448',
                                       caseNum: '88445511',
                                       caseTypeCd: 'AF',
                                       medInsurOrderedFlag: 'Y',
                                       nmsnCountryCd: 'US',
                                       nmsnStateCd: 'NV',
                                       courtName: 'Las Vegas District 8',
                                       courtOrderId: '00048918',
                                       courtOrderDt: new Date(),
                                       employeeAdweNtePct: 0,
                                       employeeCsoMaxPremium: 0,
                                       insuranceStatusCd: 'ACTIVE',
                                       planStatusCd: 'ACTIVE',
                                       eligibilityDt: new Date(),
                                       nonCustodialName: 'Shakur, Tupac',
                                       nmsnReferralReportTypeCd: 'MN',
                                       nmsnReferralStatusCd: 'ACCEPTED',
                                       nmsnReferralNmsnResponseList: [],
                                       nmsnReferralNmsnreferCoverageList: [],
                                       nmsnReferralNmsnreferDependentList: [{
                                           childName: 'Lamar, Kendrick',
                                           childSsn: '***-**-1223',
                                           childDOB: new Date("May 25, 1987 01:15:00"),
                                           childEnrolledFlag: true,
                                           childIneligibleFlag: false
                                       }],
                                       nmsnReferralNmsnreferPersorgList: [],
                                   },
];
const nmsnResponsePendingList = [
    // {
    //     nmsnReferralReportTypeCd: '4154',
    //     nmsnReferralStatusCd: '1565',
    //     submissionUser: 'Dave',
    //     docTrackingNum: '11111111',
    //     employerFein: '159754345',
    //     employeeSsn: '551234567',
    //     caseNum: '33351',
    //     caseTypeCd: '1122',
    //     medInsurOrderedFlag: 'Y',
    //     nmsnCountryCd: 'US',
    //     nmsnStateCd: 'KY',
    //     courtName: 'Twelfth Circuit',
    //     courtOrderIdent: '4455115',
    //     courtOrderDt: '1/6/2020 2:20:47 PM',
    //     employeeAdweNtePct: 13,
    //     employeeCsoMaxPremium: '5000'

    // }
];
const nmsnResponseHistoricalList = [];
const nmsnResponseRejectedList = [];

// app.use(forceSSL());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

// Run the app by serving the static files in the dist directory
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.options('/*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.status('200').end();
})

app.get('/NmsnrespRetrievalService', function (req, res) {

    if (req.query.responseType === 'HISTORICAL') {
        res.status('200').json(nmsnResponseHistoricalList);
    } else if (req.query.responseType === 'PENDING') {
        res.status('200').json(nmsnResponsePendingList)
    } else if (req.query.responseType === 'REJECTED') {
        res.status('200').json(nmsnResponseRejectedList);
    } else {
        res.status('400').json({ 'error': 'responseType not recognized' })
    }
    res.end();
});

app.get('/NmsnreferRetrievalService', function (req, res) {
    res.status('200').json(startingNmsnReferralList);
    res.end();
});

app.post('/NmsnrespUpdateService', function (req, res) {
    if (startingNmsnReferralList.length) {
        for (let i = 0; i < startingNmsnReferralList.length; i++) {
            if (startingNmsnReferralList[i].nmsnReferralId === req.body.nmsnReferralId) {
                nmsnResponsePendingList.push(req.body);
                startingNmsnReferralList.splice(i, 1);
                res.json(req.body).end();
            }
        }
    } else {
        console.error('uh oh');
        res.end();
    }
});

app.listen(8080, (err) => {
    if (!err) {
        console.log('listening on 8080!')
    } else {
        console.log('you sucks')
    }
})