fs = require('fs');

function read(path, tmpl) {
  return eval('`' + fs.readFileSync(path, 'utf-8') + '`') || "";
}

function compile() {
  var committeeForm = read('templates/committee-form.tmpl.html');
  var rightPane = 'test content';
  var header = read('templates/splash-header.tmpl.html');
  var existingReport = read('templates/existing-report.tmpl.html');
  var reportHeader = read('templates/report-header.tmpl.html')
  var chooseTransactionType = read('templates/transaction-type.tmpl.html')
  var breadCrumbsExistingReport = read('templates/breadcrumbs-existing-report.tmpl.html')
  var chooseReceiptEntryType = read('templates/entry-type.tmpl.html', {manualEntryLink: 'enter-receipt.html'})
  var chooseDisbursementEntryType = read('templates/entry-type.tmpl.html', {manualEntryLink: 'enter-disbursement.html'})
  var receiptContacts = read('templates/receipt-contact-types.tmpl.html')
  var disbursementContacts = read('templates/disbursement-contact-types.tmpl.html')
  var enterReceipt = read('templates/enter-transaction.tmpl.html', {contactTypes: receiptContacts,
                                                                            transactionType: "Contributions"})
  var enterDisbursement = read('templates/enter-transaction.tmpl.html', {contactTypes: disbursementContacts,
                                                                            transactionType: "Disbursements"})
  var readyToSubmitPane = read('templates/ready-to-submit.tmpl.html')
  var table = read('templates/table.tmpl.html')

  var index = read('templates/master.tmpl.html', {breadcrumbs: read('templates/breadcrumbs-home.tmpl.html', {rootDir: ''}),
                                                    content: read('templates/entry-content.tmpl.html', {
                                                    leftPane: read('templates/landing.tmpl.html', {rootDir: ''}),
                                                    rightPane: ""}),
                                                    header: header,
                                                    rootDir: ''});

  var selectExistingReport = read('templates/master.tmpl.html', {breadcrumbs: read('templates/breadcrumbs-home.tmpl.html', {rootDir: '../'}),
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: read('templates/landing.tmpl.html', {rootDir: '../'}),
                                                            rightPane: existingReport}),
                                                            header: header,
                                                            rootDir: '../'});

  var selectTransactionType = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: chooseTransactionType,
                                                            rightPane: ""}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var selectReceiptEntryType = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: chooseReceiptEntryType,
                                                            rightPane: ""}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var selectDisbursementEntryType = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: chooseDisbursementEntryType,
                                                            rightPane: ""}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var enterReceipt = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: enterReceipt,
                                                            rightPane: table}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var enterDisbursement = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: enterDisbursement,
                                                            rightPane: table}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var readyToSubmit = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            content: read('templates/entry-content.tmpl.html', {
                                                            leftPane: readyToSubmitPane,
                                                            rightPane: table}),
                                                            header: reportHeader,
                                                            rootDir: '../'});

  var breadcrumbsSubmission = read('templates/breadcrumbs-submission.tmpl.html')
  var submissionHeader = read('templates/submission-header.tmpl.html')
  var duplicatesOne = read('templates/duplicates-one.tmpl.html')
  var duplicatesCheck = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsSubmission,
                                                            content: duplicatesOne,
                                                            header: submissionHeader,
                                                            rootDir: '../'})
  var duplicatesTwo = read('templates/duplicates-two.tmpl.html')
  var duplicatesMerge = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsSubmission,
                                                            content: duplicatesTwo,
                                                            header: submissionHeader,
                                                            rootDir: '../'})

  var validation = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsSubmission,
                                                            content: read('templates/validate.tmpl.html'),
                                                            header: submissionHeader,
                                                            rootDir: '../'})

  var submit = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsSubmission,
                                                            content: read('templates/submit.tmpl.html', {table: table}),
                                                            header: submissionHeader,
                                                            rootDir: '../'})  ;



  fs.writeFileSync('index.html', index);
  console.log('written: index.html');

  fs.writeFileSync('html/select-existing-report.html', selectExistingReport);
  console.log('written: html/select-existing-report.html');

  fs.writeFileSync('html/select-transaction-type.html', selectTransactionType);
  console.log('written: html/select-transaction-type.html');

  fs.writeFileSync('html/select-receipt-entry-type.html', selectReceiptEntryType);
  console.log('written: html/select-receipt-entry-type.html');

  fs.writeFileSync('html/select-disbursement-entry-type.html', selectDisbursementEntryType);
  console.log('written: html/select-disbursement-entry-type.html');

  fs.writeFileSync('html/enter-receipt.html', enterReceipt);
  console.log('written: html/enter-receipt.html');

  fs.writeFileSync('html/enter-disbursement.html', enterDisbursement);
  console.log('written: html/enter-disbursement.html');

  fs.writeFileSync('html/ready-to-submit.html', readyToSubmit);
  console.log('written: html/ready-to-submit.html');

  fs.writeFileSync('html/duplicates-check.html', duplicatesCheck);
  console.log('written: html/duplicates-check.html');

  fs.writeFileSync('html/duplicates-merge.html', duplicatesMerge);
  console.log('written: html/duplicates-merge.html');

  fs.writeFileSync('html/validate.html', validation);
  console.log('written: html/validate.html');

  fs.writeFileSync('html/submit.html', submit);
  console.log('written: html/submit.html');
}

fs.watch('templates', {recursive: true}, compile)

compile()
