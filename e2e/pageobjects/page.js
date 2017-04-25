class Page {
  open(path) {
    browser.url('http://app:8080' + path)
  }
}

export default Page
