const e=`---
title: "iD8's AI Bot"
tags: ["Python", "API Integration", "LLM"]
github: 
- {name: "Source Code", url: "https://github.com/iD8-SP53-22/AI-Assistant"}
summary: "Made a Web application that uses a locally hosted LLM with an integrated Speech to Text transcription process written in python"
image: "/nova-portfolio/assets/ai-bot.png"
---
This project was solely build using free assets online, to begin with the actual Large Language Model or LLM is being hosted locally on the system while the 3D model is an import on VTube Studio. Both Programs are connect using a Virtual Cable which is using my Python Script to transcribe speech into text, sending over the transcription to the language model in a txt file which is then processed by the LLM in a response file. For the response file, the Python Script makes an API call to Eleven Labs which is a text to speech service used to send the speech over to the 3D model in VTube Studio via the virtual cable connected to Python.
`;export{e as default};
