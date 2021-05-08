import "./vf-runtime-client.js";

// Import `runtime-client-js` code from the `vfrc` global
const { default: RuntimeClientFactory, TraceType, TraceEvent } = vfrc;

// Create a RuntimeClient instance to connect to your Voiceflow app
const factory = new RuntimeClientFactory({
    versionID: '608deec6a63bb900063ded7e',
    apiKey: 'VF.608def325456ec001b29d2d3.X8wL2GdyNLWnwrtFvf3QZuhjKnIDPNbCohmyb265XN',
});
const chatbot = factory.createClient();

// Handler runs when we iterate over a Speak Trace in the chatbot's response
chatbot.onSpeak((trace) => {
    // Add the new response to the chat window
    $("#root").append(`<li class="vf"><img src="../assets/favicon/apple-touch-icon.png" alt="Website logo"/><p>${trace.payload.message}</p></li>`)
});

// Click handler - This advances the conversation session
async function handleSend() {
    // Get the user's response to the VF App's dialogue
    const userInput = $("#user-input").val();
    // clear the input field
    $("#user-input").val('');

    // Add the user's input to the chat window
    $("#root").append(`<li class="user">${userInput}</li>`)

    // Call an Interaction Method to advance the conversation based on `userInput`.
    await chatbot.sendText(userInput);

    if (chatbot.getContext().isEnding()) {
       // do something if it is ending
    }
}

// optionally automatically start the chat
chatbot.start();

// Register the click handler on a button
$("#send").on("click", handleSend);