import { Given, When, Then} from "@wdio/cucumber-framework";
import {expect} from "chai"

Given(/^Google page is opened$/, async function(){
    console.log('Before opening the browser...')
   await browser.url("https://www.google.com")
   await browser.pause(5000)
    console.log('After opening the browser...')
})
When(/^Search with (.*)$/, async function(SearchItem){
console.log('>> my search item: ${SearchItem}')
let ele = await $('[name=q]')
await ele.setValue(SearchItem)
await browser.keys("Enter")
})
Then(/^Click on first search result$/, async function(){
 let ele = await $('<h3>')
 await ele.click()
})
Then(/^URL should match (.*)$/, async function(ExpectedURL){
    console.log('>> Expected URL: ${ExpectedURL}')
    let url = await browser.getUrl()
    expect(url).to.equal(ExpectedURL)

})