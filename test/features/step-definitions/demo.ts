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

/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function(){
    await browser.url("https://the-internet.herokuapp.com/inputs")
    await browser.setTimeout({implicit:15000, pageLoad:10000})
    await browser.maximizeWindow()
    await browser.pause(5000)
})
When(/^Perform web interactions$/, async function() {
    let num = 12345
    let strNum = num.toString()
    let ele = await $('[type=number]')
    ele.click()
    // await ele.setValue(strNum)

    for(let i = 0; i < strNum.length; i++){
       let charStr = strNum.charAt(i)
       await browser.pause(500)
       await browser.keys(charStr)
    }
})