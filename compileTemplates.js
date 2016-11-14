fs = require('fs');

function read(path, tmpl) {
  return eval('`' + fs.readFileSync(path, 'utf-8') + '`') || "";
}

function compile() {
  var breadcrumbsHome = read('templates/breadcrumbs-home.tmpl.html');
  var committeeForm = read('templates/committee-form.tmpl.html');
  var rightPane = 'test content';
  var header = read('templates/splash-header.tmpl.html');
  var landing = read('templates/landing.tmpl.html');
  var existingReport = read('templates/existing-report.tmpl.html');
  var reportHeader = read('templates/report-header.tmpl.html')
  var chooseTransactionType = read('templates/transaction-type.tmpl.html')
  var breadCrumbsExistingReport = read('templates/breadcrumbs-existing-report.tmpl.html')

  var index = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsHome,
                                                    leftPane: landing,
                                                    rightPane: "",
                                                    header: header});

  var selectExistingReport = read('templates/master.tmpl.html', {breadcrumbs: breadcrumbsHome,
                                                            leftPane: landing,
                                                            rightPane: existingReport,
                                                            header: header});

  var selectTransactionType = read('templates/master.tmpl.html', {breadcrumbs: breadCrumbsExistingReport,
                                                            leftPane: chooseTransactionType,
                                                            rightPane: "",
                                                            header: reportHeader});

  fs.writeFileSync('index.html', index);
  console.log('written: index.html');
  fs.writeFileSync('html/select-existing-report.html', selectExistingReport);
  console.log('written: html/select-existing-report.html')
  fs.writeFileSync('html/select-transaction-type.html', selectTransactionType);
  console.log('written: html/select-transaction-type.html')

}

fs.watch('templates', {recursive: true}, compile)

compile()
