export function addToHomeScreen() {
  // show the install app prompt
  window.promptEvent.prompt();

  // handle the Decline/Accept choice of the user
  window.promptEvent.userChoice.then(function (choiceResult) {
    // hide the prompt banner here
    // …

    if (choiceResult.outcome === 'accepted') {
      console.info('mm User accepted the A2HS prompt');
    } else {
      console.info('mm User dismissed the A2HS prompt');
    }

    window.promptEvent = null;
  })
}