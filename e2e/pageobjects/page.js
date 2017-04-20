class Page {
  open(path) {
    browser.url('http://app:5300' + path)
  }
}

export default Page
