// server.js
const express = require('express');
const app = express();

const startingNmsnReferralList = [
{ 
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
    nmsnReferralNmsnResponseList: [''],
    nmsnReferralNmsnreferCoverageList: [''],
    nmsnReferralNmsnreferDependentList: [''],
    nmsnReferralNmsnreferPersorgList: [''],
},
{ 
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
    nmsnReferralNmsnreferCoverageList: [],
    nmsnReferralNmsnreferDependentList: [],
    nmsnReferralNmsnreferPersorgList: [],
}
];
const nmsnResponsePendingList = [
    {
        nmsnReferralReportTypeCd : '4154',
        nmsnReferralStatusCd : '1565',
        submissionUser : 'Dave',
        docTrackingNum : '11111111',
        employerFein : '159754345',
        employeeSsn : '551234567',
        caseNum : '33351',
        caseTypeCd : '1122',
        medInsurOrderedFlag : 'Y',
        nmsnCountryCd : 'US',
        nmsnStateCd : 'KY',
        courtName : 'Twelfth Circuit',
        courtOrderIdent : '4455115',
        courtOrderDt : '1/6/2020 2:20:47 PM',
        employeeAdweNtePct : 13,
        employeeCsoMaxPremium : '5000'

    }
];
const nmsnResponseHistoricalList = [];
const nmsnResponseRejectedList = [];

// app.use(forceSSL());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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

app.get('/NmsnrespRetrievalService', function(req, res) {
    
    if (req.query.responseType === 'HISTORICAL') {
        res.status('200').json(nmsnResponseHistoricalList);
    } else if (req.query.responseType === 'PENDING') {
        res.status('200').json(nmsnResponsePendingList)
    } else if (req.query.responseType === 'REJECTED') {
        res.status('200').json(nmsnResponseRejectedList);
    } else {
        res.status('400').json({'error': 'responseType not recognized'})
    }
    res.end();
});

app.get('/NmsnreferRetrievalService', function(req, res) {
    res.status('200').json(startingNmsnReferralList);
    res.end();
});

app.post('/NmsnrespSubmissionService', function(req, res) {

});

app.put('/NmsnrespUpdateService', function(req, res) {

});

app.listen(8080, (err) => {
    if (!err) {
        console.log('listening on 8080!')
    } else {
        console.log('you sucks')
    }
})