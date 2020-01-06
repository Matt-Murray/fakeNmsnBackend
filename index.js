// server.js
const express = require('express');
const app = express();
const path = require('path');

// app.use(forceSSL());

// Run the app by serving the static files in the dist directory
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

app.get('/NmsnrespRetrievalService', function(req, res) {
    
});

app.get('/NmsnreferRetrievalService', function(req, res) {
    res.status('200').json(
        [
            { 
            //   docTrackingNum
            nmsnReferralReportTypeCd: 'MN',
                nmsnReferralStatusCd: 'ACCEPTED',
                employerFein: '12121234',
                employeeSsn: '123456789',
                caseNum: '11223344',
                caseTypeCd: 'AF',
                medInsurOrderedFlag: 'Y',
                nmsnCountryCd: 'US',
                nmsnStateCd: 'GA',
                courtName: 'Eleventh Circuit',
                courtOrderIdent: '11111111',
                courtOrderDt: new Date(),
            //   employeeAdweNtePct;
                employeeCsoMaxPremium: '600',
                nmsnReferralNmsnResponseList: {},
                nmsnReferralNmsnreferCoverageList: {},
                nmsnReferralNmsnreferDependentList: {},
                nmsnReferralNmsnreferPersorgList: {},
            },
            { 
                //   docTrackingNum
                nmsnReferralReportTypeCd: 'MN',
                nmsnReferralStatusCd: 'COMPLETED',
                employerFein: '12121234',
                employeeSsn: '987654321',
                caseNum: '00001111',
                caseTypeCd: 'NA',
                medInsurOrderedFlag: 'N',
                nmsnCountryCd: 'US',
                nmsnStateCd: 'GA',
                courtName: 'Eleventh Circuit',
                courtOrderIdent: '1',
                courtOrderDt: new Date(),
                employeeAdweNtePct: 15,
                employeeCsoMaxPremium: '500',
                nmsnReferralNmsnResponseList: {},
                nmsnReferralNmsnreferCoverageList: {},
                nmsnReferralNmsnreferDependentList: {},
                nmsnReferralNmsnreferPersorgList: {},
            },
        ] 
    )
    res.end();
});

app.post('/NmsnrespSubmissionService', function(req, res) {

});

app.put('/NmsnrespUpdateService', function(req, res) {

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);