/* Amplify Params - DO NOT EDIT
	API_IDEAVOTING_GRAPHQLAPIIDOUTPUT
	API_IDEAVOTING_USERTABLE_ARN
	API_IDEAVOTING_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
exports.handler = async (event, context) => {
  console.log(`### CREATING NEW USER FROM EVENT: ${JSON.stringify(event)}`)
  console.log(`Trigger Source: ${event?.triggerSource}`)

  if (event?.triggerSource !== 'PostConfirmation_ConfirmSignUp') {
    console.log(`Trigger source was not "PostConfirmation_ConfirmSignUp". Skipping.`)
    return event
  }

  return event
}
