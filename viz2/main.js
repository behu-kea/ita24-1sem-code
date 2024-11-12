

document.querySelector('button').addEventListener('click', () => {
    //synth.triggerAttackRelease(200, "8n");
    danishInflationNumbers.forEach((index, value) => {
        //console.log(index)
        //console.log(value)
        const valueNoNegastiv = value + 16;
        const synth = new Tone.Synth().toDestination();
        setTimeout(() => {
            synth.triggerAttackRelease((valueNoNegastiv * 70) + 400, "16n");
        }, index * 1000);

        //create a synth and connect it to the main output (your speakers)

        //play a tone with 200 hz for an 8th notes time

        // after 3 seconds play 400 hz
        //synth.triggerAttackRelease(400, "8n", 3);
    });
});