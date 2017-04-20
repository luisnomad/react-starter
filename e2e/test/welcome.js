describe('Welcome page', () => {
  it('shows a nice text', () => {
    browser.url('http://app:5300')
    browser.getText('div#app').should.be.equal('It Works!');
  })
})
