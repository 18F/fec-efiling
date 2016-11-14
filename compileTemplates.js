fs = require('fs');

function read(path, tmpl) {
  return eval('`' + fs.readFileSync(path, 'utf-8') + '`') || "";
}

function compile() {
  var breadcrumbs = read('templates/breadcrumbs.tmpl.html');
  var committeeForm = read('templates/committee-form.tmpl.html');
  var rightPane = 'test content';
  var header = read('templates/splash-header.tmpl.html');
  var landing = read('templates/landing.tmpl.html');
  var existingReport = read('templates/existing-report.tmpl.html');

  var index = read('templates/master.tmpl.html', {breadcrumbs: "",
                                                    leftPane: landing,
                                                    rightPane: "",
                                                    header: header});

  var existingReport = read('templates/master.tmpl.html', {breadcrumbs: "",
                                                            leftPane: landing,
                                                            rightPane: existingReport,
                                                            header: header});

  fs.writeFileSync('index.html', index);
  console.log('written: index.html');
  fs.writeFileSync('html/existing-report.html', existingReport);
  console.log('written: html/existing-report.html')
}

fs.watch('templates', {recursive: true}, compile)

compile()
