import {pages} from './../pages/index.js';

 export const cloudPageActions = async () => {
    await pages("cloudPage").cloudPageSearch.item("searchIcon").click();
    await pages("cloudPage").cloudPageSearch.item("searchInput").setValue("Google Cloud Platform Pricing Calculator");
    await pages("cloudPage").cloudPageSearch.item("seachBtn").click();
    await pages("cloudPage").cloudPageSearch.item("searchResult").waitForDisplayed();
    await pages("cloudPage").cloudPageSearch.item("searchResult").click();
}


