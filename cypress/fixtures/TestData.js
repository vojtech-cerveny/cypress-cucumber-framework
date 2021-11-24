/// <reference types="cypress" />

class TestData {
    static constants(key) {
        switch(key) {
            case 'SeleniumEasy': return "https://demo.seleniumeasy.com/";
        }
    }
}

export default TestData;
