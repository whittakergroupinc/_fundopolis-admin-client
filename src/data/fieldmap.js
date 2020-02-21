import React from "react";

const fieldMap = {
  'h0-m1-b0': { text: 'Is your company based in the United States?', type: 'radio' },
  'h0-m1-b1': { text: 'Is your company in any of the following sectors?', type: 'radio' },
  'h0-m2-b0': { text: 'How much do you want to raise?', type: undefined },
  'h0-m2-b1': { text: 'Company Structure', type: undefined },
  'h0-m2-b2': { text: 'Are you an S-Corp?', type: 'radio' },
  'h0-m2-b3': { text: 'Type of security you want to issue', type: undefined },
  'h0-m2-b4': {
    text: 'How much of your own money have you invested (or will invest) in this business?',
    type: undefined
  },
  'h0-m2-b5': { text: 'How much have others invested in this business?', type: undefined },
  'h0-m2-b6': { text: 'Have you done a Reg CF raise before?', type: 'radio' },
  'h0-m2-b7': { text: 'When did you last raise?', type: undefined },
  'h0-m2-b8': { text: 'How much did you raise?', type: undefined },
  'h0-m2-b9': { text: 'Which platform did you use?', type: undefined },
  'h0-m3-b0': { text: 'Is this an existing business?', type: 'radio' },
  'h0-m3-b1': { text: 'Were you profitable last year?', type: 'radio' },
  'h0-m3-b2': { text: 'Are you expecting to be profitable this year?', type: 'radio' },
  'h0-m3-b3': { text: 'If you are not profitable, when do you expect to be?', type: undefined },
  'h0-m3-b4': {
    text:
      'Have your financial statements been reviewed or audited by a third-party accountant in the last three years?',
    type: 'radio'
  },
  'h0-m4-b0': { text: 'Pitch', type: undefined },
  'h0-m4-b1': { text: 'Do you have a business plan?', type: 'radio' },
  'h0-m5-b0': { text: 'Number of followers on Facebook', type: undefined },
  'h0-m5-b1': { text: 'Number of followers on LinkedIn', type: undefined },
  'h0-m5-b2': { text: 'Number of followers on Twitter', type: undefined },
  'h0-m5-b3': { text: 'Number of followers on Instagram', type: undefined },
  'h0-m6-b0': {
    text:
      'How many officers, directors and principal security holders with 20 percent or more equity voting rights are on your team?',
    type: undefined
  },
  'h0-m6-b1': {
    text: 'Have any of these individuals been convicted of a financial crime?',
    type: 'radio'
  },
  'h1-m1-b0': { text: 'Overview/Pitch', type: undefined },
  'h1-m2-b0': { text: 'Business Plan', type: undefined },
  'h1-m3-sm0-b0': { text: 'Website', type: undefined },
  'h1-m3-sm0-b1': { text: 'Number of employees', type: undefined },
  'h1-m3-sm0-b2': { text: 'Facebook URL', type: undefined },
  'h1-m3-sm0-b3': { text: 'Number of followers on Facebook', type: undefined },
  'h1-m3-sm0-b4': { text: 'LinkedIn URL', type: undefined },
  'h1-m3-sm0-b5': { text: 'Number of followers on LinkedIn', type: undefined },
  'h1-m3-sm0-b6': { text: 'Twitter URL', type: undefined },
  'h1-m3-sm0-b7': { text: 'Number of followers on Twitter', type: undefined },
  'h1-m3-sm0-b8': { text: 'Instagram URL', type: undefined },
  'h1-m3-sm0-b9': { text: 'Number of followers on Instagram', type: undefined },
  'h1-m3-sm1-b0': { text: 'Address Line 1', type: undefined },
  'h1-m3-sm1-b1': { text: 'Address Line 2', type: undefined },
  'h1-m3-sm1-b2': { text: 'zipCode1', type: undefined },
  'h1-m3-sm1-b3': { text: 'Do you want to highlight your raise location on your Raise Page?', type: 'radio' },
  'h1-m3-sm1-b4': { text: 'Description', type: undefined },
  'h1-m3-sm1-b5': { text: 'Number', type: undefined },
  'h1-m3-sm1-b6': { text: 'h1-m3-sm1-b6', type: undefined },
  'h1-m3-sm1-b7': { text: 'h1-m3-sm1-b7', type: undefined },
  'h1-m3-sm1-b8': { text: 'h1-m3-sm1-b8', type: undefined },
  'h1-m3-sm1-b9': { text: 'h1-m3-sm1-b9', type: undefined },
  'h1-m3-sm1-b10': { text: 'Is your raise location different than your headquarter location?', type: "radio" }, //type=decisionWrapper"
  'h1-m3-sm1-b11': { text: 'h1-m3-sm1-b11', type: undefined },
  'h1-m3-sm1-b12': { text: 'h1-m3-sm1-b12', type: undefined },
  'h1-m3-sm1-b13': { text: 'h1-m3-sm1-b13', type: undefined },
  'h2-m1-sm0-b1': { text: 'How will you use the money raised?', type: undefined }, // type: "textArea"
  'h2-m1-sm0-b0': { text: 'h2-m1-sm0-b0', type: undefined }, //type=range
  'h2-m1-sm1-b0': { text: 'h2-m1-sm1-b0', type: undefined },
  'h2-m1-sm2-b0': { text: 'Does your company have any irregular use of proceeds?', type: "radio"}, //type=decisionWrapper"
  'h2-m1-sm2-b1': { text: 'h2-m1-sm2-b1', type: undefined },
  'h2-m2-sm0-b1': { text: 'Address line 1', type: undefined },
  'h2-m2-sm0-b2': { text: 'Address line 2', type: undefined },
  'h2-m2-sm0-b0': { text: 'Bank Name', type: undefined },
  'h2-m2-sm0-b3': { text: 'zipCode1', type: undefined },
  'h2-m2-sm0-b5': { text: 'First Name', type: undefined },
  'h2-m2-sm0-b4': { text: 'Please upload your most recent bank statement', type: undefined }, //type=fileInput
  'h2-m2-sm0-b7': { text: 'Email', type: undefined },
  'h2-m2-sm0-b6': { text: 'Last Name', type: undefined },
  'h2-m2-sm0-b10': { text: 'Routing number', type: undefined },
  'h2-m2-sm0-b9': { text: 'Account Number', type: undefined },
  'h2-m2-sm0-b8': { text: 'Phone', type: undefined },
  'h2-m2-sm1-b0': { text: 'Does your company have a third-party accountant?', type: "radio"}, //type=decisionWrapper"
  'h2-m2-sm1-b2': { text: 'h2-m2-sm1-b2', type: undefined },
  'h2-m2-sm1-b1': { text: 'h2-m2-sm1-b1', type: undefined },
  'h2-m2-sm1-b4': { text: 'h2-m2-sm1-b4', type: undefined },
  'h2-m2-sm1-b3': { text: 'h2-m2-sm1-b3', type: undefined },
  'h2-m2-sm1-b6': { text: 'h2-m2-sm1-b6', type: undefined },
  'h2-m2-sm1-b7': { text: 'h2-m2-sm1-b6', type: undefined },
  'h2-m2-sm1-b5': { text: 'h2-m2-sm1-b5', type: undefined },
  'h2-m2-sm1-b8': { text: 'h2-m2-sm1-b8', type: undefined },
  'h2-m2-sm2-b2': { text: 'h2-m2-sm2-b2', type: undefined },
  'h2-m2-sm2-b3': { text: 'h2-m2-sm2-b3', type: undefined },
  'h2-m2-sm2-b0': { text: 'h2-m2-sm2-b0', type: undefined },
  'h2-m2-sm2-b1': { text: 'h2-m2-sm2-b1', type: undefined },
  'h2-m2-sm2-b6': { text: 'h2-m2-sm2-b6', type: undefined },
  'h2-m2-sm2-b7': { text: 'h2-m2-sm2-b7', type: undefined },
  'h2-m2-sm2-b4': { text: 'h2-m2-sm2-b4', type: undefined },
  'h2-m2-sm2-b5': { text: 'h2-m2-sm2-b5', type: undefined },
  'h2-m2-sm2-b8': { text: 'h2-m2-sm2-b8', type: undefined }, //type=textArea
  'h2-m3-b1': { text: 'h2-m3-b1', type: undefined },
  'h2-m3-b18': { text: 'h2-m3-b18', type: undefined },
  'h2-m3-b0': { text: 'Fiscal year end', type: undefined },
  'h2-m3-b17': { text: 'h2-m3-b17', type: undefined },
  'h2-m3-b14': { text: 'h2-m3-b14', type: undefined },
  'h2-m3-b5': { text: 'h2-m3-b5', type: undefined },
  'h2-m3-b13': { text: 'h2-m3-b13', type: undefined },
  'h2-m3-b4': { text: 'h2-m3-b4', type: undefined },
  'h2-m3-b16': { text: 'h2-m3-b16', type: undefined },
  'h2-m3-b3': { text: 'h2-m3-b3', type: undefined },
  'h2-m3-b15': { text: 'h2-m3-b15', type: undefined },
  'h2-m3-b2': { text: 'h2-m3-b2', type: undefined },
  'h2-m3-b9': { text: 'h2-m3-b9', type: undefined },
  'h2-m3-b8': { text: 'h2-m3-b8', type: undefined },
  'h2-m3-b7': { text: 'h2-m3-b7', type: undefined },
  'h2-m3-b6': { text: 'h2-m3-b6', type: undefined },
  'h2-m3-b10': { text: 'h2-m3-b10', type: undefined },
  'h2-m3-b12': { text: 'h2-m3-b12', type: undefined },
  'h2-m3-b11': { text: 'h2-m3-b11', type: undefined },
  'h2-m4-sm0-b0': { text: 'h2-m4-sm0-b0', type: undefined }, //type=textArea
  'h2-m4-sm1-b0': { text: 'Within the past three years, have you participated in any other exempt offerings? (Reg CF, Reg A+, Reg D, etc.)?', type: "radio"}, //type=decisionWrapper"
  'h2-m4-sm1-b1': { text: 'h2-m4-sm1-b1', type: undefined },
  'h2-m4-sm2-b0': { text: 'Does your company have any capital resources?', type: "radio"}, //type=decisionWrapper"
  'h2-m4-sm2-b1': { text: 'h2-m4-sm2-b1', type: undefined },
  'h2-m4-sm3-b0': { text: 'h2-m4-sm3-b0', type: undefined }, //type=textArea
  'h2-m4-sm4-b0': { text: 'h2-m4-sm4-b0', type: undefined }, //type=textArea
  'h3-m1-b10': { text: 'Legal Name of Company', type: undefined },
  'h3-m1-b4': { text: 'State file number', type: undefined },
  'h3-m1-b3': { text: 'Employer Identification Number (EIN)', type: undefined },
  'h3-m1-b6': { text: 'h3-m1-b6', type: undefined },
  'h3-m1-b5': { text: 'Does your company have outside legal counsel assisting with this raise?', type: "radio"}, //type=decisionWrapper"
  'h3-m1-b8': { text: 'h3-m1-b8', type: undefined },
  'h3-m1-b7': { text: 'h3-m1-b7', type: undefined },
  'h3-m1-b9': { text: 'h3-m1-b9', type: undefined },
  'h3-m1-b0': { text: 'h3-m1-b0', type: undefined },
  'h3-m1-b2': { text: 'Date company was formed', type: undefined },
  'h3-m1-b1': { text: 'State of Organization', type: undefined }, //type: "dropdown"
  'h3-m2-sm0-b0': { text: 'Class of Securities', type: undefined }, // type: "collectionTable"
  'h3-m2-sm1-b0': { text: 'Principal Shareholder', type: undefined }, // type: "collectionTable"
  'h3-m2-sm2-b0': { text: 'h3-m2-sm2-b0', type: undefined }, //type=textArea
  'h3-m2-sm3-b0': { text: 'h3-m2-sm3-b0', type: undefined },
  'h3-m3-b0': { text: 'Add/Edit Investment Risk', type: undefined }, // type: "collectionTable"
  'h3-m4-b0': { text: 'h3-m4-b0', type: undefined },
  'h3-m4-b1': { text: 'h3-m4-b1', type: undefined },
  'h3-m4-b2': { text: 'h3-m4-b2', type: undefined },
  'h3-m4-b3': { text: 'h3-m4-b3', type: undefined },
  'h4-m1-sm0-b0': { text: 'Youtube video URL', type: undefined },
  'h4-m1-sm0-b1': { text: 'h4-m1-sm0-b1', type: undefined }, //type=textArea
  'h4-m1-sm1-b1': { text: 'Raise Title', type: undefined },
  'h4-m1-sm1-b0': { text: 'Company Name', type: undefined },
  'h4-m1-sm1-b2': { text: 'Company Tagline', type: undefined },
  'h4-m1-sm2-b0': { text: 'Key fact 1', type: undefined },
  'h4-m1-sm2-b3': { text: 'Key fact 4', type: undefined },
  'h4-m1-sm2-b4': { text: 'Key fact 5', type: undefined },
  'h4-m1-sm2-b1': { text: 'Key fact 2', type: undefined },
  'h4-m1-sm2-b2': { text: 'Key fact 3', type: undefined },
  'h4-m1-sm3-b0': { text: 'Opportunity', type: undefined },
  'h4-m2-sm0-b0': { text: 'h4-m2-sm0-b0', type: undefined }, // type: "range"
  'h4-m2-sm0-b1': { text: 'Length of campaign (in days)', type: undefined },
  'h4-m2-sm1-b6': { text: 'Explain the methods for company valuation which led to the price of your securities.', type: undefined },
  'h4-m2-sm1-b5': { text: 'Summarize the difference between the securities you are offering in this raise and all previous outstanding securities of your company', type: undefined },
  'h4-m2-sm1-b0': { text: 'Security Type', type: undefined }, // type: "decisionWrapper"
  'h4-m2-sm1-b4': { text: 'Are there any limitations to shareholders voting rights? Please explain below', type: undefined },
  'h4-m2-sm1-b3': { text: 'Do shareholders have equity voting rights?', type: 'radio' },
  'h4-m2-sm1-b2': { text: 'Maximum number of shares', type: undefined },
  'h4-m2-sm1-b1': { text: 'Price per unit', type: undefined },
  'h4-m2-sm1-b15': { text: 'h4-m2-sm1-b1', type: undefined },
  'h4-m2-sm2-b0': { text: 'Add/Edit a Perk Item', type: undefined }, // type: "collectionTable"
  'h4-m2-sm3-b0': { text: 'Add/Edit a Perk Package', type: undefined }, // type: "collectionTable"
  'h4-m3-b0': { text: 'Please check all that apply', type: undefined }, // type: "multiCheckbox"
  'h4-m4-b1': { text: 'Add/Edit a Milestones', type: undefined }, // type: "collectionTable"
  'h4-m5-sm0-b0': { text: 'Add/Edit a Media Quote', type: undefined }, //type: "collectionTable"
  'h4-m5-sm1-b0': { text: 'h4-m5-sm1-b0', type: undefined }, // type: "collectionTable"
  'h4-m6-b0': { text: 'Add/Edit a FAQ', type: undefined } // type: "collectionTable"
};
export default fieldMap;
