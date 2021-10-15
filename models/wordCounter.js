const wordCounter = {
    count: function(res, body) {
        const regex = /[.!,"?()]/g;
        const text = body.text.replace(regex, "").replace(/[\n]/g, " ");
        const textArray = text.split(" ");
        let memory = {};
        let topTen = [];
        let output = {};

        textArray.forEach(word => {
            const wordLower = word.toLowerCase();

            if (wordLower in memory) {
                memory[wordLower]++;
            } else {
                memory[wordLower] = 1;
            }
        });

        for (const word of Object.keys(memory)) {
            if (topTen.length < 10) {
                topTen.push(word);
            } else if (memory[topTen[9]] < memory[word]) {
                topTen[9] = word;
            }
            topTen.sort((a, b) => {
                if (memory[a]  > memory[b]) {return -1;}
                if (memory[a] < memory[b]) {return 1;}
                return 0;
            });
        }

        topTen.forEach(word => {
            output[word] = memory[word];
        });

        return res.status(200).json(output);
    },

};

module.exports = wordCounter;
